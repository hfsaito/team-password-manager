import { Express } from "express";
import { attachControllers } from "@decorators/express";
import { AllControllers } from "@app";

export const setup = (app: Express) => {
  attachControllers(app, AllControllers);
  
  const port = 3000;
  app.listen(port);
  console.info(`Listen port ${port}!`);
};
