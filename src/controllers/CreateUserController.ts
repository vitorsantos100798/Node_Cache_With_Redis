import { Request, Response } from "express";
import { CreateUserProvider } from "../provider/CreateUserProvider";

export class CreateUserController {
  async execute(request: Request, response: Response) {
    const data = request.body;

    const service = new CreateUserProvider();

    const responseData = await service.execute(data);

    if (responseData instanceof Error) {
      return response.status(400).json({
        error: responseData.message,
      });
    }
    return response.status(201).json(responseData);
  }
}
