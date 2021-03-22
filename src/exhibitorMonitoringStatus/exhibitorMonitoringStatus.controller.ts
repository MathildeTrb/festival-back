import {Body, Controller, Get, Post} from "@nestjs/common";
import {ExhibitorMonitoringStatusService} from "./exhibitorMonitoringStatus.service";
import {ExhibitorMonitoringStatusDto} from "./exhibitorMonitoringStatus.dto";

@Controller("exhibitorMonitoringStatus")
export class ExhibitorMonitoringStatusController {

    constructor(private readonly exhibitorMonitoringStatusService : ExhibitorMonitoringStatusService) {}

    @Post()
    async create(@Body("exhibitorMonitoringStatus") exhibitorMonitoringStatus : ExhibitorMonitoringStatusDto){
        return this.exhibitorMonitoringStatusService.create(exhibitorMonitoringStatus)
    }

    @Get()
    async getAll() {
        return await this.exhibitorMonitoringStatusService.getAll();
    }

}
