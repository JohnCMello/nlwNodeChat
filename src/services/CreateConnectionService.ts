import { getCustomRepository } from "typeorm"
import { ConnectionsRepo } from "../repositories/ConnectionsRepo"

interface IConnectionRequest {
  admin_id?: string
  user_id: string
}
class CreateConnectionService {
  async execute({ admin_id, user_id }: IConnectionRequest) {
    const connectionsRepo = getCustomRepository(ConnectionsRepo)

    const connection = connectionsRepo.create({
      admin_id,
      user_id
    })

    await connectionsRepo.save(connection)

    return connection

  }
}

export { CreateConnectionService }