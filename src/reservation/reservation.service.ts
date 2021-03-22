import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Reservation} from "./reservation.entity";
import {ReservationDto} from "./reservation.dto";
import {ExhibitorMonitoring} from "../exhibitorMonitoring/exhibitorMonitoring.entity";

@Injectable()
export class ReservationService{
    constructor(
        @Inject("RESERVATION_REPOSITORY")
        private reservationRepository: Repository<Reservation>
    ) {}

    async create(newReservation: ReservationDto, newExhibitorMonitoring : ExhibitorMonitoring){
        const reservation: Reservation = new Reservation();
        reservation.needVolunteer = newReservation.needVolunteer;
        reservation.willCome = newReservation.willCome;
        reservation.comment = newReservation.comment;
        reservation.mailingDate = newReservation.mailingDate;
        reservation.paymentDate = newReservation.paymentDate;
        reservation.exhibitorMonitoring = newExhibitorMonitoring;

        return this.reservationRepository.save(reservation)
    }

    /*async update(reservationDto: ReservationDto){
        return this.reservationRepository.update({reser})
    }*/



}



