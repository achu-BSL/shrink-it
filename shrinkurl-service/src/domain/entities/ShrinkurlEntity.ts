import { randomUUID } from 'crypto';

export class ShrinkurlEntity {
  constructor(
    public actualUrl: string,
    public userId: string,
    public shrinkUrlId = randomUUID().toString(),
  ) {}
}
