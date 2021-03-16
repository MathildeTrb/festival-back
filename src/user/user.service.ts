import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { UserDto } from "./user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<User>
  ) {
  }

  //used in auth
  async getByMail(mail: string) {
    return this.userRepository.findOne({ where: { mail } });
  }

  async create(newUser: UserDto) {
    const user: User = new User();
    const saltOrRounds = await bcrypt.genSalt();
    user.firstname = newUser.firstname;
    user.lastname = newUser.lastname;
    user.mail = newUser.mail;
    user.password = await bcrypt.hash(newUser.password, saltOrRounds);
    return this.userRepository.save(user);
  }

  async getAll() {
    return this.userRepository.find();
  }

  async getById(id: number) {
    return this.userRepository.findOne(id)
  }
}
