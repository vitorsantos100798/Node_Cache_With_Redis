import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export const UserRepositorie = AppDataSource.getRepository(User);
