import init from "./infrastructure/database/setup";
import { Server } from "./presentaion/Server";
const main = async () => {
  await init();

  Server.run(3001);
};

main();
