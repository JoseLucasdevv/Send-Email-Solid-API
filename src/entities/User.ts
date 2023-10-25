import { uuid } from "uuidv4";

export class User {
  public readonly id!: string;

  public name: string;
  public password: string;
  public email: string;

  constructor(props: Omit<User, "id">, id?: string) {
    this.name = props.name;
    this.password = props.password;
    this.email = props.email;
    if (!id) {
      this.id = uuid();
    }
  }
}
