import express from "express";
import { CreateShrinkurlController } from "./controllers/CreateShrinkurlController";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = express();

export class Server {
  static run(
    port: number,
    createShrinkurlController: CreateShrinkurlController
  ) {
    app.use(express.json(), express.urlencoded({ extended: true }));

    app.post("/shrinkurl", (req, res) => {
      createShrinkurlController.handle(req, res);
    });

    app.listen(port, () => {
      console.log(`[shrinkurl-service]: Server running on port ${port}`);
    });
  }
}
