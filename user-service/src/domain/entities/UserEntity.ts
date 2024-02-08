import { randomUUID } from 'crypto';

export class User {
  constructor(
    public userName: string,
    public password: string,
    public userId = randomUUID().toString()
  ) {}
};
