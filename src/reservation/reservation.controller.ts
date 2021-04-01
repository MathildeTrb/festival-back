import {Body, Controller, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {ReservationService} from "./reservation.service";
import {ReservationDto} from "./reservation.dto";

@Controller("reservations")
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}

    @Post()
    async create(
        @Body('reservation') reservation: ReservationDto
    ) {
        return await this.reservationService.create(reservation)
    }

    @Put()
    async update(@Body("reservation") reservation: ReservationDto) {
        return await this.reservationService.update(reservation);
    }

    @Put("needVolunteer")
    async updateNeedVolunteer(@Body("reservation") reservation: ReservationDto) {
        return await this.reservationService.updateNeedVolunteer(reservation);
    }

    @Put("willCome")
    async updateWillCome(@Body("reservation") reservation: ReservationDto) {
        return await this.reservationService.updateWillCome(reservation);
    }

    @Get("festival/:id")
    async getAllByIdFestival(@Param("id", ParseIntPipe) id: number) {
        return await this.reservationService.getAllByIdFestival(id);
    }



}
