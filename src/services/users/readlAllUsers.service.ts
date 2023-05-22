import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { allUsersSchema } from "../../schemas/users.schemas";
import { IAllUsersReturn } from "../../interfaces/users.interfaces";

const readAllUsersService = async (): Promise<IAllUsersReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: IAllUsersReturn = await userRepository.find();
  const newUsersArray = allUsersSchema.parse(findUser);

  return newUsersArray;
};

export default readAllUsersService;
