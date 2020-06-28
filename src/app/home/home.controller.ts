import { RequestHandler, Request, Response } from "express";
import { Controller, Get } from "@decorators/express";

@Controller("/")
export class HomeController {
  @Get("/")
  homeGet(_: Request, res: Response) {
    res.send({ home: true });
  }
}
