import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, Request, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { User } from "./user.decorator";
import { UserDto } from "./user.dto";

@Controller("users")
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@User() user) {
    return await this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profil")
  async getProfile(@User() user) {
    return await user;
  }

  @Post("register")
  async create(@Body() newUser: UserDto) {
    return await this.userService.create(newUser);
  }

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number
  ){
    return await this.userService.getById(id)
  }


}