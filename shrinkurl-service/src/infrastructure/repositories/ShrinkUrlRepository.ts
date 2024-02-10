import { IShrinkurlRepository } from "../../application/interface/IShrinkurlRepository";
import { ShrinkurlEntity } from "../../domain/entities/ShrinkurlEntity";
import shrinkurlModel from "../database/models/ShrinkurlModel";

export class ShrinkurlRepository implements IShrinkurlRepository {
  async save(shrinkurl: ShrinkurlEntity) {
    try {
      const mongoShrinkurl = await shrinkurlModel.create({
        actualUrl: shrinkurl.actualUrl,
        userId: shrinkurl.userId,
        shrinkUrlId: shrinkurl.shrinkUrlId,
      });

      return new ShrinkurlEntity(
        mongoShrinkurl.actualUrl,
        mongoShrinkurl.userId.toString(),
        mongoShrinkurl.shrinkUrlId
      );
    } catch (err) {
      return Error("shrink url created faild");
    }
  }

  async findShrinkurlsByUserId(userId: string) {
    const mongoShrinkurls = await shrinkurlModel.find({ userId });
    return mongoShrinkurls.map((url) => {
      return new ShrinkurlEntity(url.actualUrl, userId, url.shrinkUrlId);
    });
  }

  async findShrinkurlByShrinkurlId(shrinkUrlId: string) {
    const mongoShrinkurl = await shrinkurlModel.findOne({ shrinkUrlId });
    if (!mongoShrinkurl) return null;
    return new ShrinkurlEntity(
      mongoShrinkurl.actualUrl,
      mongoShrinkurl.userId.toString(),
      mongoShrinkurl.shrinkUrlId
    );
  }
}
