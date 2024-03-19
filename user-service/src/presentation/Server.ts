import express, { urlencoded } from "express";
import { RegisterController } from "./controllers/RegisterController";
import { LoginController } from "./controllers/Logincontroller";
import cors from "cors";

const app = express();

export class Server {
  static run(
    port: number,
    registerController: RegisterController,
    logincontroller: LoginController
  ) {
    app.use(cors({ origin: "http://localhost:5173", methods: ["GET", "POST"], allowedHeaders: ["Content-Type"] }));

    app.use(express.json());
    app.use(urlencoded({ extended: true }));

    app.get("/test", (req, res) => res.send("Server running"));

    app.post("/register", (req, res) => {
      registerController.handle(req, res);
    });

    app.post("/login", (req, res) => {
      logincontroller.handle(req, res);
    });

    app.listen(port, () => {
      console.log(`[user-service]: Server running on port ${port}`);
    });
  }
}
