import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import {UserService} from "../user/user.service";
import { User } from "../user/user.entity";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService,
    private configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("SECRET"),
    });
  }

  async validate(payload: any) {
    console.log(this.configService.get<string>("SECRET"))
    const user : User = await this.userService.getById(payload.id)
    const {password, ...result} = user
    return { ...result};
  }
}
