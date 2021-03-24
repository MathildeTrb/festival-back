import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import {ExhibitorMonitoringService} from "./exhibitorMonitoring.service";
import { ExhibitorMonitoringDto } from "./exhibitorMonitoring.dto";

@Controller("exhibitorMonitorings")
export class ExhibitorMonitoringController {

    constructor(private readonly exhibitorMonitoringService: ExhibitorMonitoringService ) {
    }

    @Get()
    async getAll(){
        return await this.exhibitorMonitoringService.getAll();
    }

    @Get(":id")
    async getByFestival(@Param("id", ParseIntPipe) id: number){
        return await this.exhibitorMonitoringService.getByFestival(id);
    }

    @Get(":idFestival/:idExhibitor")
    async getByFestivalAndExhibitor(
      @Param("idFestival", ParseIntPipe) idFestival: number,
      @Param("idExhibitor", ParseIntPipe) idExhibitor: number){
        return await this.exhibitorMonitoringService.getByFestivalAndExhibitor(idFestival, idExhibitor)
    }

    @Put("date")
    async updateDate(@Body('exhibitorMonitoring') exhibitorMonitoringDto: ExhibitorMonitoringDto){
        return await this.exhibitorMonitoringService.updateDate(exhibitorMonitoringDto);
    }

    @Put("status")
    async updateStatus(@Body('exhibitorMonitoring') exhibitorMonitoringDto: ExhibitorMonitoringDto){
        return await this.exhibitorMonitoringService.updateStatus(exhibitorMonitoringDto);
    }

}
