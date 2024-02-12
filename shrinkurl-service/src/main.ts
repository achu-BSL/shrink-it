import { CreateShrinkurl } from "./application/use-cases/CreateShrinkurl";
import { RetriveShrinkurls } from "./application/use-cases/RetriveShrinkurls";
import init from "./infrastructure/database/setup";
import { ShrinkurlRepository } from "./infrastructure/repositories/ShrinkUrlRepository";
import { Server } from "./presentaion/Server";
import { CreateShrinkurlController } from "./presentaion/controllers/CreateShrinkurlController";
import { RetriveShrinkurlsController } from "./presentaion/controllers/RetriveShrinkurlsController";

const main = async () => {
  await init();

  const shrinkurlRepo = new ShrinkurlRepository();

  const createShrinkurl = new CreateShrinkurl(shrinkurlRepo);
  const retriveShrinkurls = new RetriveShrinkurls(shrinkurlRepo);

  const createShrinkurlController = new CreateShrinkurlController(
    createShrinkurl
  );
  const retriveShrinkurlsController = new RetriveShrinkurlsController(
    retriveShrinkurls
  );


  Server.run(
    3001,
    createShrinkurlController,
    retriveShrinkurlsController,
  );
};

main();
