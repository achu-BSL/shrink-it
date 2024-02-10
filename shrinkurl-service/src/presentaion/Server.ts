import express from "express";

const app = express();

export class Server {
  static run(port: number) {
    app.use(express.json(), express.urlencoded({ extended: true }));

    app.listen(port, () => {
      console.log(`[shrinkurl-service]: Server running on port ${port}`);
    });
  }
}
