import {Body, Controller, Post} from "@nestjs/common";
import {GameMonitoringStatusDto} from "./gameMonitoringStatus.dto";
import {GameMonitoringStatusService} from "./gameMonitoringStatus.service";

@Controller("gameMonitoringStatus")
export class GameMonitoringStatusController{
    constructor(private readonly gameMonitoringStatusService : GameMonitoringStatusService) {
    }

    @Post()
    async create(@Body("gameMonitoringStatus") gameMS : GameMonitoringStatusDto){
        return this.gameMonitoringStatusService.create(gameMS)
    }
}
