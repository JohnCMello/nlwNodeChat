import { getCustomRepository } from "typeorm"
import { UsersRepo } from "../repositories/UsersRepo"

class CreateUserService {
  async execute(email: string) {
    if (!email) throw new Error('Email not provided, please provide email.')

    const usersRepo = getCustomRepository(UsersRepo)

    const registeredEmail = await usersRepo.findOne({ email })

    if (registeredEmail) throw new Error(
      'There is already a user registered under this email'
    )

    const user = usersRepo.create({ email })

    await usersRepo.save(user)

    return user
  }
}

export { CreateUserService }