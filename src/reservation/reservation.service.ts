import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Reservation} from "./reservation.entity";

@Injectable()
export class ReservationService{
    constructor(
        @Inject("RESERVATION_REPOSITORY")
        private reservationRepository: Repository<Reservation>
    ) {}

}
