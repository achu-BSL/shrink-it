import { Request, Response } from "express";
import { RetriveShrinkurls } from "../../application/use-cases/RetriveShrinkurls";


export class RetriveShrinkurlsController {
  constructor(private retriveShrinkurls: RetriveShrinkurls) {}

  async handle(req: Request, res: Response) {
    const userId  = req.headers['X-userId'];
    if(!userId) return res.status(401).send({msg: 'Authentication required'});

    const response = await this.retriveShrinkurls.execute(userId as string);

    res.status(200).json(response);
  }
}
