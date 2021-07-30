import { getCustomRepository } from "typeorm"
import { SettingsRepo } from "../repositories/SettingsRepo"

interface ISettingRequest {
  username: string;
  chat: boolean;
}

class CreateSettingService {
  async execute({ username, chat }: ISettingRequest) {
    const settingsRepo = getCustomRepository(SettingsRepo)

    if (!username) throw new Error('Username not provided')
    if (!chat) throw new Error(`You have to write something, don't you?`)

    const settings = settingsRepo.create({
      username,
      chat
    })

    await settingsRepo.save(settings)

    return settings
  }
}

export { CreateSettingService }