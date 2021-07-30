import { Request, Response } from "express"
import { CreateMessageService } from "../services/CreateMessageService"

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { admin_id, text, user_id } = req.body

    const createMessageService = new CreateMessageService()

    const message = await createMessageService.execute({
      admin_id,
      text,
      user_id
    })

    return res.json(message)
  }
}

export { CreateMessageController }