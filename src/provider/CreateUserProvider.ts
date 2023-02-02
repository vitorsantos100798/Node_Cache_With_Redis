import { UserRepositorie } from "../repositories/UserRepositorie";
import { CreateUserType } from "../@types/CreateUserTypes";
import { hash } from "bcrypt";
import { User } from "../entities/User";

export class CreateUserProvider {
  async execute({ name, email, password }: CreateUserType) {
    const repo = UserRepositorie;

    const user = await repo.findOneBy({ email });

    if (user) {
      return new Error("Usuário já Cadastrado.");
    }

    const hashPassword = await hash(password, 8);

    const create = await repo.create({
      name,
      email,
      password: hashPassword,
    });

    const { password: _, ...data } = create;
    await repo.save(create);

    return data;
  }
}
