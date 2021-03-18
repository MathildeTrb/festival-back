import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, Request, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { User } from "./user.decorator";
import { UserDto } from "./user.dto";
import { User as UserEntity } from "./user.entity";


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
    console.log(user);
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

  @Get(":id")
  async getById(
    @Param("id", ParseIntPipe) id: number
  ) {
    return await this.userService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteProfilByToken(@User() user) {
    return await this.userService.delete(user);
  }

  @Put("account")
  async updateProfil(
    @Body("user") user
  ) {
    const userUpdated = await this.userService.updateAccount(user);
    const { password, ...result } = userUpdated;
    return result;
  }

  @Put("password")
  async updatePassword(
    @Body('passwordManaged') passwordManaged
  ){
    return await this.userService.updatePassword(passwordManaged)
  }

}
