import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import {ExhibitorMonitoringService} from "./exhibitorMonitoring.service";
import { ExhibitorMonitoringDto } from "./exhibitorMonitoring.dto";

@Controller("exhibitorMonitorings")
export class ExhibitorMonitoringController {

    constructor(private readonly exhibitorMonitoringService: ExhibitorMonitoringService ) {
    }

    @Get("festival/:idFestival")
    async getReservationsConfirmed(@Param("idFestival", ParseIntPipe) idFestival: number){
        return await this.exhibitorMonitoringService.getReservationsConfirmed(idFestival)
    }

    @Get("festival/:idFestival/peopleContacted")
    async getPeopleContactedByFestival(@Param("idFestival", ParseIntPipe) idFestival: number){
        return await this.exhibitorMonitoringService.getPeopleContacted(idFestival)
    }



    @Get()
    async getAll(){
        return await this.exhibitorMonitoringService.getAll();
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

    @Put("comment")
    async updateComment(@Body("exhibitorMonitoring") exhibitorMonitoring: ExhibitorMonitoringDto) {
        return await this.exhibitorMonitoringService.updateComment(exhibitorMonitoring);
    }

    @Get("reservations/festival/:id")
    async getReservationsByIdFestival(@Param("id", ParseIntPipe) id: number) {
        return await this.exhibitorMonitoringService.getReservationsByIdFestival(id);
    }

    @Get(":idExhibitor/dashboard/:idFestival")
    async getDashboard(
        @Param("idExhibitor", ParseIntPipe) idExhibitor: number,
        @Param("idFestival", ParseIntPipe) idFestival: number
    ) {
        return await this.exhibitorMonitoringService.getDashboard(idExhibitor, idFestival);
    }


    @Get("festival/:idFestival/peopleNotContacted")
    async getPeopleNotContactedByFestival(@Param("idFestival", ParseIntPipe) idFestival: number){
        return await this.exhibitorMonitoringService.getPeopleNotContactedByFestival(idFestival)
    }

    @Get("festival/:idFestival/peopleContactedNoAnswer")
    async getPeopleContactedNoAnswer(@Param("idFestival", ParseIntPipe) idFestival: number){
        return await this.exhibitorMonitoringService.getPeopleContactedNoAnswer(idFestival)
    }

    @Get(":id")
    async getByFestival(@Param("id", ParseIntPipe) id: number){
        return await this.exhibitorMonitoringService.getByFestival(id);
    }



}
