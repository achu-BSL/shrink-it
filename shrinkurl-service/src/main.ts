import { CreateShrinkurl } from "./application/use-cases/CreateShrinkurl";
import { RetriveShrinkUrl } from "./application/use-cases/RetriveShrinkUrl";
import { RetriveShrinkurls } from "./application/use-cases/RetriveShrinkurls";
import init from "./infrastructure/database/setup";
import { ShrinkurlRepository } from "./infrastructure/repositories/ShrinkUrlRepository";
import { Server } from "./presentaion/Server";
import { CreateShrinkurlController } from "./presentaion/controllers/CreateShrinkurlController";
import { NavigateShrinkurlController } from "./presentaion/controllers/NavigateShrinkurlController";
import { RetriveShrinkurlsController } from "./presentaion/controllers/RetriveShrinkurlsController";

const main = async () => {
  await init();

  const shrinkurlRepo = new ShrinkurlRepository();

  const createShrinkurl = new CreateShrinkurl(shrinkurlRepo);
  const retriveShrinkurls = new RetriveShrinkurls(shrinkurlRepo);
  const retriveShrinkUrl = new RetriveShrinkUrl(shrinkurlRepo);

  const createShrinkurlController = new CreateShrinkurlController(
    createShrinkurl
  );
  const retriveShrinkurlsController = new RetriveShrinkurlsController(
    retriveShrinkurls
  );
  const navigateShrinkurlController = new NavigateShrinkurlController(
    retriveShrinkUrl
  );

  Server.run(
    3003,
    createShrinkurlController,
    retriveShrinkurlsController,
    navigateShrinkurlController
  );
};

main();
