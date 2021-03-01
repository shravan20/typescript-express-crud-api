
import { UserRepository } from '@app/repository';

export default class UserService {
  private userRepository: UserRepository;

  public constructor(userRepository:UserRepository) {
    this.userRepository = userRepository;
  }

  public getUsers = async () => {
    return await this.userRepository.getUser();
  }
  
}

