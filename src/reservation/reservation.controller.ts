import {Body, Controller, Post} from "@nestjs/common";
import {ReservationService} from "./reservation.service";
import {ReservationDto} from "./reservation.dto";
import {FestivalDto} from "../festival/festival.dto";
import {ExhibitorMonitoringDto} from "../exhibitorMonitoring/exhibitorMonitoring.dto";

@Controller("reservations")
export class ReservationController{
    constructor(private readonly reservationService : ReservationService) {
    }

    @Post()
    async create (
      @Body('reservation') reservation : ReservationDto
    ){
        return await this.reservationService.create(reservation)
    }

}
