import { RetriveShrinkUrl } from "../../application/use-cases/RetriveShrinkUrl";
import { Request, Response } from "express";

export class NavigateShrinkurlController {
  constructor(private retriveShrinkUrl: RetriveShrinkUrl) {}

  async handle(req: Request, res: Response) {
    const { shrinkUrlId } = req.params;

    const response = await this.retriveShrinkUrl.execute(shrinkUrlId);

    if (response instanceof Error) {
      return res.status(404).json({ msg: "URL NOT FOUND" });
    }

    res.redirect(response.actualUrl);
  }
}
