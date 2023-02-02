import bcrypt from "bcrypt";
import { LoginType, PromiseLogin } from "../@types/LoginType";
import { UserRepositorie } from "../repositories/UserRepositorie";
import { setRedis, getRedis } from "../configRedis";
import jwt from "jsonwebtoken";
import { info } from "console";
export class LoginUserProvider {
  async execute({ email, password }: LoginType) {
    const repo = UserRepositorie;

    const user = await repo.findOneBy({ email });

    if (user?.email != email) {
      return new Error("Email invalido");
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return new Error("Senha Invalida");
    }

    const { password: _, ...data } = user;

    const token = jwt.sign({ ...info }, "1234", {
      subject: String(user.id),
      expiresIn: "1day",
    });

    return { data, token };
  }
}
