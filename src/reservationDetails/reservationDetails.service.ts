import { Inject, Injectable } from "@nestjs/common";
import { Reservation } from "../reservation/reservation.entity";
import { ReservationDetailsDto } from "./reservationDetails.dto";
import { ReservationDetails } from "./reservationDetails.entity";
import { Repository } from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ReservationDetailsService{

  constructor(
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

    return await this.reservationDetailsRepository.save(reservationDetails);
  }
}
