import { Body, Controller, Get, Post, Req, Request, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { User } from "./user.decorator"
import { UserDto } from "./user.dto";

@Controller('user')
export class UserController{
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@User() user){
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profil')
  getProfile(@User() user){
    return user;
  }

  @Post('register')
  addUser(@Body() newUser : UserDto){
    return this.userService.addUser(newUser)
  }

}