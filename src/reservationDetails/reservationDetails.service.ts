import { Inject, Injectable } from "@nestjs/common";
import { Reservation } from "../reservation/reservation.entity";
import { ReservationDetailsDto } from "./reservationDetails.dto";
import { ReservationDetails } from "./reservationDetails.entity";
import { Repository } from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import { SpaceService } from "../space/space.service";

@Injectable()
export class ReservationDetailsService{

  constructor(
    private readonly spaceService: SpaceService,
    @InjectRepository(ReservationDetails)
    private reservationDetailsRepository: Repository<ReservationDetails>
  ) {
  }

  async create(savedReservation: Reservation, newReservationDetails: ReservationDetailsDto) {

    const reservationDetails = new ReservationDetails()
    reservationDetails.meterReserved = newReservationDetails.meterReserved
    reservationDetails.tableReserved = newReservationDetails.tableReserved
    reservationDetails.reservation = savedReservation
    reservationDetails.space = newReservationDetails.space

    const newTableRemaining = newReservationDetails.space.tableRemaining - (
      reservationDetails.meterReserved * 6 + reservationDetails.tableReserved
    )

    await this.spaceService.updateTableRemaining(newReservationDetails.space, newTableRemaining)

    return await this.reservationDetailsRepository.save(reservationDetails);
  }
}
