import {Body, Controller, Get, Post} from "@nestjs/common";
import {ExhibitorMonitoringService} from "./exhibitorMonitoring.service";
import {ExhibitorMonitoringDto} from "./exhibitorMonitoring.dto";

@Controller("exhibitorMonitorings")
export class ExhibitorMonitoringController {

    constructor(private readonly exhibitorMonitoringService: ExhibitorMonitoringService ) {
    }

    @Post()
    async create(@Body("exhibitorMonitoring") exhibitorMonitoring : ExhibitorMonitoringDto){
        return this.exhibitorMonitoringService.create(exhibitorMonitoring)
    }

    @Get()
    async getAll(){
        return await this.exhibitorMonitoringService.getAll();
    }


    /*@Get(":id")
    async getByFestival(@Param("id", ParseIntPipe) id: number){
        return await this.exhibitorMonitoringService.getByFestival(id);
    }*/
}
