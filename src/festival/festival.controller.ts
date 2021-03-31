import {Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import {FestivalService} from "./festival.service";
import {SpaceDto} from "../space/space.dto";
import {FestivalDto} from "./festival.dto";
import { Festival } from "./festival.entity";

@Controller('festivals')
export class FestivalController {

    constructor(
        private festivalService: FestivalService
    ) {
    }

    @Get(":idFestival/GamesNotPlaced")
    async  getGamesNotPlaced(@Param("idFestival", ParseIntPipe) id:number){
        return await this.festivalService.getGamesNotPlaced(id)
    }

    @Get(":idFestival/GamesNotReceived")
    async getGamesNotReceived(@Param("idFestival", ParseIntPipe) id: number){
        return await this.festivalService.getGamesNotReceived(id)
    }

    /*@UseGuards(JwtAuthGuard)*/
    @Post()
    async create(
        @Body("festival") festival: FestivalDto,
        @Body("spaces") spaces: SpaceDto[]
    ){
        console.log(spaces)
        return await this.festivalService.create(festival, spaces);
    }

    @Put()
    async update(
      @Body("festival") festival: Festival
    ){
        return await this.festivalService.update(festival)
    }

    @Get()
    async getAll() {
        return await this.festivalService.getAll();
    }

    @Get("current")
    async getCurrent() {
        return await this.festivalService.getCurrent();
    }

    @Get("current/games")
    async getCurrentWithGames() {
        return await this.festivalService.getCurrentWithGames();
    }

    @Get(":id")
    async getById(@Param('id', ParseIntPipe) id: number) {
        const res = await this.festivalService.getById(id)
        console.log(res)
        return await this.festivalService.getById(id);
    }


    /*
      @Get(":id/gameMonitorings")
      async getWithGameMonitoringsById(@Param("id", ParseIntPipe) id: number) {
        return await this.festivalService.getWithGameMonitoringsById(id);
      }*/

    //TODO : Update
}
