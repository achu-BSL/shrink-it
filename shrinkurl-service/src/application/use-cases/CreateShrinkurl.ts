import { ShrinkurlEntity } from "../../domain/entities/ShrinkurlEntity";
import { IShrinkurlRepository } from "../interface/IShrinkurlRepository";
import { nanoid } from "nanoid";

export class CreateShrinkurl {
  constructor(private shrinkurlRepo: IShrinkurlRepository) {}

  async execute(shrinkurl: ShrinkurlEntity) {
    const shrinkUrlId = nanoid(10);

    const result = await this.shrinkurlRepo.save(
      new ShrinkurlEntity(shrinkurl.actualUrl, shrinkurl.userId, shrinkUrlId)
    );
    if (result instanceof Error) {
      return Error("Storing shrinkurl in database failed");
    }

    return result;
  }
}
