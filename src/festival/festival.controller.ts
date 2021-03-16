import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { FestivalService } from "./festival.service";
import { SpaceDto } from "../space/space.dto";
import { FestivalDto } from "./festival.dto";

@Controller('festival')
export class FestivalController {

  constructor(
    private festivalService : FestivalService
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body("festival") festival: FestivalDto,
    @Body("spaces") spaces: SpaceDto[])
  {
    return await this.festivalService.create(festival, spaces);
  }

  @Get()
  async getAll(){
    return await this.festivalService.getAll();
  }

  @Get("current")
  async getCurrent(){
    return await this.festivalService.getCurrent();
  }

  @Get(":id")
  async getById(
    @Param('id', ParseIntPipe) id: number
  ){
    return await this.festivalService.getById(id);
  }

  //TODO : Update
}
