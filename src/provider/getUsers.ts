import { setRedis, getRedis } from "../configRedis";
import { User } from "../entities/User";
import { UserRepositorie } from "../repositories/UserRepositorie";

export class GetUserService {
  async execute() {
    const find = await UserRepositorie.find();

    if (!find) {
      return new Error("Erro at find Users");
    }
    await setRedis("1234", JSON.stringify(find));
    const redis = await getRedis("1234");

    const json = JSON.parse(`${redis}`);
    return json;
  }
}
