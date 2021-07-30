import { Request, Response } from "express"
import { CreateSettingService } from "../services/CreateSettingService"

class CreateSettingController {
  async handle(req: Request, res: Response) {
    const { username, chat } = req.body
    const createSettingService = new CreateSettingService()

    const setting = await createSettingService.execute({
      username,
      chat
    })

    return res.json(setting)
  }
}

export { CreateSettingController }