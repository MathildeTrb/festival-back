import {Controller, Get} from "@nestjs/common";
import {GameMonitoringStatusService} from "./gameMonitoringStatus.service";

@Controller("gameMonitoringStatus")
export class GameMonitoringStatusController {

    constructor(private readonly gameMonitoringStatusService: GameMonitoringStatusService) {}

    @Get()
    async getAll() {
        return await this.gameMonitoringStatusService.getAll();
    }
}
