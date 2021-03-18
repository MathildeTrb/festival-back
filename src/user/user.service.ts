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
    const user: User = await User.createFromDto(newUser);
    return this.userRepository.save(user);
  }

  async getAll() {
    return this.userRepository.find({
      order: {
        lastname: "ASC",
        firstname: "ASC"
      }
    });
  }

  async getById(id: number) {
    return this.userRepository.findOne(id);
  }

  async delete(id: number) {
    return this.userRepository.delete(id);
  }

  async updateAccount(newUser: UserDto) {
    await this.userRepository.update(
      { id: newUser.id },
      {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        mail: newUser.mail
      }
    );
    return this.userRepository.findOne(newUser.id);
  }

  async updatePassword(passwordManaged) {
    console.log(passwordManaged)
    const { id, oldPassword, newPassword } = passwordManaged;
    const user = await this.userRepository.findOne(id)
    console.log(user.password)
    console.log(user)
    console.log(oldPassword)
    if(user && await bcrypt.compare(oldPassword, user.password)){
      const saltOrRounds = await bcrypt.genSalt();
      console.log(saltOrRounds)
      console.log(newPassword)
      const savedPassword = await bcrypt.hash(newPassword, saltOrRounds)
      await this.userRepository.update(
        {id: user.id},
        {password: savedPassword}
        )
      return true;
    }
    return false;
  }
}
