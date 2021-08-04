import { Request, Response } from "express"
import { CreateConnectionService } from "../services/CreateConnectionService"

class CreateConnectionController {
  async handle(req: Request, res: Response) {
    const { admin_id, user_id } = req.body

    const createConnectionService = new CreateConnectionService()

    const connection = await createConnectionService.execute({
      admin_id,
      user_id
    })

    return res.json(connection)
  }
}

export { CreateConnectionController }