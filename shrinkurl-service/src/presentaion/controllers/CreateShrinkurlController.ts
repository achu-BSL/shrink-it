import { Request, Response } from "express";
import { CreateShrinkurl } from "../../application/use-cases/CreateShrinkurl";
import { ShrinkurlEntity } from "../../domain/entities/ShrinkurlEntity";


interface IResponseDTO {
  actualUrl: string;
  shrinkUrlId: string;
}

class ResponseDTO implements IResponseDTO {
  constructor(public actualUrl: string, public shrinkUrlId: string) {}
}

export class CreateShrinkurlController {
  constructor(private createShrinkurl: CreateShrinkurl) {}

  async handle(req: Request, res: Response) {
    const { actualUrl } = req.body;
    const userId  = req.headers['X-userId'];
    if(!userId) return res.status(401).send({msg: 'Authentication required'});

    const shrinkurl = new ShrinkurlEntity(actualUrl, userId as string);

    console.log(shrinkurl);

    const response = await this.createShrinkurl.execute(shrinkurl);

    if (response instanceof Error) {
      return res.status(500).send({ msg: "Creating shrinkurl failed" });
    }

    const responseDTO = new ResponseDTO(
      response.actualUrl,
      response.shrinkUrlId
    );

    res.status(201).json(responseDTO);
  }
}
