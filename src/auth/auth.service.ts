import { Injectable } from '@nestjs/common';
import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(mail: string, pass: string): Promise<any>{
    const user = await this.userService.findOne(mail);
    if(user && await bcrypt.compare(pass, user.password)){
      const {password, ...result} = user;
      return result;
    }
    return null
  }

  async login (user : User){
    const payload = {mail: user.mail, sub: user.id};
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
