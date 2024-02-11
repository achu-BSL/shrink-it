import { CreateShrinkurl } from "./application/use-cases/CreateShrinkurl";
import init from "./infrastructure/database/setup";
import { ShrinkurlRepository } from "./infrastructure/repositories/ShrinkUrlRepository";
import { Server } from "./presentaion/Server";
import { CreateShrinkurlController } from "./presentaion/controllers/CreateShrinkurlController";

const main = async () => {
  await init();

  const shrinkurlRepo = new ShrinkurlRepository();

  const createShrinkurl = new CreateShrinkurl(shrinkurlRepo);

  const createShrinkurlController = new CreateShrinkurlController(
    createShrinkurl
  );

  Server.run(3001, createShrinkurlController);
};

main();
