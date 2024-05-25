import { MailProvider } from "../../providers/implementations/MailTrapProvider";
import { PostgressUserRepository } from "../../repositories/implementations/PostgressUserRespository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgressUserRepository = new PostgressUserRepository();

const mailtrapMailProvider = new MailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgressUserRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
