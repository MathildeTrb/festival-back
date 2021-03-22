import {Body, Controller, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {GameMonitoringService} from "./gameMonitoring.service";
import {GameMonitoringDto} from "./gameMonitoring.dto";

@Controller("gameMonitorings")
export class GameMonitoringController {

    constructor(private readonly gameMonitoringService: GameMonitoringService) {}

    @Post()
    async create(@Body("gameMonitoring") gameM : GameMonitoringDto){
        return await this.gameMonitoringService.create(gameM)
    }

    @Put()
    async update(@Body("gameMonitoring") gameM: GameMonitoringDto){
        return await this.gameMonitoringService.update(gameM)
    }

    @Get(":id")
    async getByFestival(@Param('id',ParseIntPipe) id: number){
        return await this.gameMonitoringService.getAllByFestival(id)
    }
}

