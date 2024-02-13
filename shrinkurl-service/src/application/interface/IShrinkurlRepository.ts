import { ShrinkurlEntity } from "../../domain/entities/ShrinkurlEntity";

export interface IShrinkurlRepository {
    save: (shrinkurl: ShrinkurlEntity) => Promise<ShrinkurlEntity | Error>;
    findShrinkurlsByUserId: (userId: string) => Promise<ShrinkurlEntity[]>;
    findShrinkurlByShrinkurlId: (shrinkurlId: string) => Promise<ShrinkurlEntity | null>;
}