import { ShrinkurlRepository } from "../../infrastructure/repositories/ShrinkUrlRepository";

export class RetriveShrinkUrl {
    constructor (private shrinkurlRepo: ShrinkurlRepository) {}

    async execute (shrinkUrlId: string) {
        const shrinkurl = await this.shrinkurlRepo.findShrinkurlByShrinkurlId(shrinkUrlId);
        if(!shrinkurl) return Error('Shrinkurl not found');
        return shrinkurl;
    }
}