import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Reservation } from "./reservation.entity";
import { ReservationDto } from "./reservation.dto";
import { ExhibitorMonitoring } from "../exhibitorMonitoring/exhibitorMonitoring.entity";
import { ReservationDetailsService } from "../reservationDetails/reservationDetails.service";

@Injectable()
export class ReservationService {
  constructor(
    private readonly reservationDetailsService: ReservationDetailsService,
    @Inject("RESERVATION_REPOSITORY")
    private reservationRepository: Repository<Reservation>
  ) {
  }

  async create(newReservation: ReservationDto) {

    console.log("Voici ma nouvelle réservation" + newReservation);
    console.log(newReservation)

    const reservation: Reservation = new Reservation();
    reservation.needVolunteer = newReservation.needVolunteer;
    reservation.willCome = newReservation.willCome;
    reservation.comment = newReservation.comment;
    reservation.discount = newReservation.discount;
    reservation.exhibitorMonitoring = newReservation.exhibitorMonitoring;
    const savedReservation = await this.reservationRepository.save(reservation);

    console.log("voici ma saved réservation " + savedReservation);

    newReservation.reservationsDetails.map(async reservationDetails => {
      console.log("voici ma réservation détails");
      await this.reservationDetailsService.create(savedReservation, reservationDetails);
    });

    return savedReservation;
  }

}



