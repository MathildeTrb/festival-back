import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import {ExhibitorMonitoringService} from "./exhibitorMonitoring.service";
import { ExhibitorMonitoringDto } from "./exhibitorMonitoring.dto";
import {FestivalDto} from "../festival/festival.dto";
import {Festival} from "../festival/festival.entity";
import {ExhibitorMonitoring} from "./exhibitorMonitoring.entity";
import {Company} from "../company/company.entity";

@Controller("exhibitorMonitorings")
export class ExhibitorMonitoringController {

    constructor(private readonly exhibitorMonitoringService: ExhibitorMonitoringService ) {
    }

    @Post()
    async create(
        @Body("festival") festival: Festival,
        @Body("company") company: Company,
        @Body("comment") comment: string
    ){
        return await this.exhibitorMonitoringService.create(festival,company, comment)
    }

    @Get("festival/:idFestival")
    async getReservationsConfirmed(@Param("idFestival", ParseIntPipe) idFestival: number){
        return await this.exhibitorMonitoringService.getReservationsConfirmed(idFestival)
    }

    @Get("festival/:idFestival/peopleContacted")
    async getPeopleContactedByFestival(@Param("idFestival", ParseIntPipe) idFestival: number){
        return await this.exhibitorMonitoringService.getPeopleContacted(idFestival)
    }

    @Get("festival/:idFestival/exhibitorsNotInFestival")
    async getExhibitorsNotInFestival(@Param("idFestival", ParseIntPipe) idFestival: number) {
        return await this.exhibitorMonitoringService.getExhibitorsNotInFestival(idFestival)
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
        console.log("people not contacted")
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
