import {Body, Controller, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {GameMonitoringService} from "./gameMonitoring.service";
import {GameMonitoringDto} from "./gameMonitoring.dto";

@Controller("gameMonitorings")
export class GameMonitoringController {

    constructor(private readonly gameMonitoringService: GameMonitoringService) {}

    @Get(":idFestival/gamesNotPlaced")
    async getGamesNotPlacedByFestival(@Param("idFestival", ParseIntPipe) id:number){
        console.log("GAMES NOT PLACED")
        return await this.gameMonitoringService.getGamesNotPlacedByFestival(id)
    }

    @Get(":idFestival/gamesNotReceived")
    async getGamesNotReceivedByFestival(@Param("idFestival", ParseIntPipe) id:number){
        console.log("GAMES NOT RECEIVED")
        return await this.gameMonitoringService.getGamesNotReceivedByFestival(id)
    }

    @Get(":idFestival")
    async getAllGamesByFestival(@Param("idFestival", ParseIntPipe) id: number){

        console.log("ALL GAMES BY FESTIVAL")
        return await this.gameMonitoringService.getAllByFestival(id)
    }

    @Post()
    async create(@Body("gameMonitoring") gameM : GameMonitoringDto){
        return await this.gameMonitoringService.create(gameM)
    }

    @Put()
    async update(@Body("gameMonitoring") gameM: GameMonitoringDto){
        return await this.gameMonitoringService.update(gameM)
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

