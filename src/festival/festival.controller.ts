import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
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
  @Post('create')
  async addFestival(
    @Body("festival") festival: FestivalDto,
    @Body("spaces") spaces: SpaceDto[])
  {
    return await this.festivalService.addFestival(festival, spaces);
  }

}
