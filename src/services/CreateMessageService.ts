import { getCustomRepository } from "typeorm"
import { MessagesRepo } from "../repositories/MessagesRepo"

interface IMessageRequest {
  admin_id?: string
  text: string
  user_id: string
}

class CreateMessageService {
  async execute({ admin_id, text, user_id }: IMessageRequest) {
    const messagesRepo = getCustomRepository(MessagesRepo)

    const message = messagesRepo.create({
      admin_id,
      text,
      user_id
    })

    await messagesRepo.save(message)

    return message
  }
}

export { CreateMessageService }