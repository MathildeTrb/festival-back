import {Body, Controller, Get, Param, ParseIntPipe, Post} from "@nestjs/common";
import {ExhibitorMonitoringService} from "./exhibitorMonitoring.service";
import {ExhibitorMonitoringDto} from "./exhibitorMonitoring.dto";

@Controller("exhibitorMonitorings")
export class ExhibitorMonitoringController {

    constructor(private readonly exhibitorMonitoringService: ExhibitorMonitoringService ) {
    }

    // je ne suis pas sur quelle soit utile, à voir mais dans tous les cas il n'y a pas d'exhibitor monitoring dto
/*    @Post()
    async create(@Body("exhibitorMonitoring") exhibitorMonitoring : ExhibitorMonitoringDto){
        return await this.exhibitorMonitoringService.create(exhibitorMonitoring)
    }*/

    @Get()
    async getAll(){
        return await this.exhibitorMonitoringService.getAll();
    }


    @Get(":id")
    async getByFestival(@Param("id", ParseIntPipe) id: number){
        return await this.exhibitorMonitoringService.getByFestival(id);
    }
}
