import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {GameMonitoringService} from "./gameMonitoring.service";
import {GameMonitoringDto} from "./gameMonitoring.dto";

@Controller("gameMonitorings")
export class GameMonitoringController {

    constructor(private readonly gameMonitoringService: GameMonitoringService) {}

    @Get(":idFestival/gamesNotPlaced")
    async getGamesNotPlacedByFestival(@Param("idFestival", ParseIntPipe) id:number){
        return await this.gameMonitoringService.getGamesNotPlacedByFestival(id)
    }

    @Get(":idFestival/gamesNotReceived")
    async getGamesNotReceivedByFestival(@Param("idFestival", ParseIntPipe) id:number){
        return await this.gameMonitoringService.getGamesNotReceivedByFestival(id)
    }

    @Get(":idFestival")
    async getAllGamesByFestival(@Param("idFestival", ParseIntPipe) id: number){
        return await this.gameMonitoringService.getAllByFestival(id)
    }

    @Post()
    async create(@Body("gameMonitoring") gameM : GameMonitoringDto){
        return await this.gameMonitoringService.create(gameM)
    }

    @Put()
    async update(@Body("gameMonitoring") gameMonitoringDto: GameMonitoringDto){
        return await this.gameMonitoringService.update(gameMonitoringDto)
    }

    @Delete(":idReservation/:idGame")
    async delete(
        @Param("idReservation", ParseIntPipe) idReservation: number,
        @Param("idGame", ParseIntPipe) idGame: number
    ) {
        return await this.gameMonitoringService.delete(idReservation, idGame);
    }

    @Get("current")
    async getGamesOfCurrent() {
        return await this.gameMonitoringService.getGamesOfCurrentFestival();
    }

    @Get(":id")
    async getByFestival(@Param('id',ParseIntPipe) id: number){
        return await this.gameMonitoringService.getAllByFestival(id)
    }

}

