import express from "express";
import { CreateShrinkurlController } from "./controllers/CreateShrinkurlController";
import { RetriveShrinkurlsController } from "./controllers/RetriveShrinkurlsController";
import { authMiddleware } from "./middlewares/authMiddleware";
import { NavigateShrinkurlController } from "./controllers/NavigateShrinkurlController";
import cors from "cors";

const app = express();

export class Server {
  static run(
    port: number,
    createShrinkurlController: CreateShrinkurlController,
    retriveShrinkurlsController: RetriveShrinkurlsController,
    navigateShrinkurlController: NavigateShrinkurlController
  ) {
    app.use(cors({ origin: "http://localhost:5173" }));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/test", (req, res) => {
      res.send({ msg: `Server is running on port ${port}` });
    });

    app.get("/:shrinkUrlId", (req, res) => {
      navigateShrinkurlController.handle(req, res);
    });

    app.use(authMiddleware);

    app.get("/", (req, res) => {
      retriveShrinkurlsController.handle(req, res);
    });

    app.post("/", (req, res) => {
      createShrinkurlController.handle(req, res);
    });

    app.listen(port, () => {
      console.log(`[shrinkurl-service]: Server running on port..... ${port}`);
    });
  }
}
