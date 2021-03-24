import {Body, Controller, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {ReservationService} from "./reservation.service";
import {ReservationDto} from "./reservation.dto";
import {Reservation} from "./reservation.entity";

@Controller("reservations")
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {
    }

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

    @Get("festival/:id")
    async getAllByIdFestival(@Param("id", ParseIntPipe) id: number) {

        const reservations: Reservation[] = await this.reservationService.getAllByIdFestival(id);
        console.log(reservations)
        return reservations;
    }



}
