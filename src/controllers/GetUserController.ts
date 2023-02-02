import { Request, Response } from "express";
import { GetUserService } from "../provider/getUsers";

export class GetUserController {
  async execute(request: Request, response: Response) {
    const repo = new GetUserService();

    const result = await repo.execute();

    if (result instanceof Error) {
      return response.json(`${result.message}`);
    }
    return response.status(201).json(result);
  }
}
