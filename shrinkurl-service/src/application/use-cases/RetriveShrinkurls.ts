import { ShrinkurlRepository } from "../../infrastructure/repositories/ShrinkUrlRepository";

export class RetriveShrinkurls {
  constructor(private shrinkurlRepo: ShrinkurlRepository) {}

  async execute(userId: string) {
    const result = await this.shrinkurlRepo.findShrinkurlsByUserId(userId);
    return result;
  }
}
