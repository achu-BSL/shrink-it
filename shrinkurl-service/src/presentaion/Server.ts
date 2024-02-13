import express from "express";
import { CreateShrinkurlController } from "./controllers/CreateShrinkurlController";
import { RetriveShrinkurlsController } from "./controllers/RetriveShrinkurlsController";
import { authMiddleware } from "./middlewares/authMiddleware";
import { NavigateShrinkurlController } from "./controllers/NavigateShrinkurlController";

const app = express();

export class Server {
  static run(
    port: number,
    createShrinkurlController: CreateShrinkurlController,
    retriveShrinkurlsController: RetriveShrinkurlsController,
    navigateShrinkurlController: NavigateShrinkurlController
  ) {
    app.use(express.json(), express.urlencoded({ extended: true }));

    app.get("/shrinkurl/:shrinkUrlId", (req, res) => {
      navigateShrinkurlController.handle(req, res);
    });

    app.use(authMiddleware);
    
    app.get("/shrinkurl", (req, res) => {
      retriveShrinkurlsController.handle(req, res);
    });

    app.post("/shrinkurl", (req, res) => {
      createShrinkurlController.handle(req, res);
    });

    app.listen(port, () => {
      console.log(`[shrinkurl-service]: Server running on port ${port}`);
    });
  }
}
