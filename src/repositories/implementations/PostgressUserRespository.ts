import { User } from "../../entities/User";
import { IUserRepository } from "../user-repository";

export class PostgressUserRepository implements IUserRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
