import { IUserRepository } from "../../repositories/user-repository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { ImailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
  constructor(
    private _userRepository: IUserRepository,
    private _MailProvider: ImailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this._userRepository.findByEmail(data.email);
    if (userAlreadyExist) {
      throw new Error("User already exist");
    }
    const user = new User(data);
    await this._userRepository.save(user);
    this._MailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe do app",
        email: "equipe@meuApp.com",
      },
      subject: "Seja bem vindo ao app",
      body: "testando o app.",
    });
  }
}
