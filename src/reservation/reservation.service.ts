import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Reservation} from "./reservation.entity";
import {ReservationDto} from "./reservation.dto";
import {ReservationDetailsService} from "../reservationDetails/reservationDetails.service";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ReservationService {
    constructor(
        private readonly reservationDetailsService: ReservationDetailsService,
        @InjectRepository(Reservation)
        private reservationRepository: Repository<Reservation>
    ) {
    }

    async create(newReservation: ReservationDto) {

        const reservation: Reservation = new Reservation();
        reservation.needVolunteer = newReservation.needVolunteer;
        reservation.willCome = newReservation.willCome;
        reservation.discount = newReservation.discount;
        reservation.exhibitorMonitoring = newReservation.exhibitorMonitoring;
        const savedReservation = await this.reservationRepository.save(reservation);

        console.log(newReservation)
        console.log(newReservation.reservationDetails)

        newReservation.reservationDetails.map(async reservationDetails => {
            await this.reservationDetailsService.create(savedReservation, reservationDetails);
        });

        return savedReservation;
    }

    async getAllByIdFestival(id: number): Promise<Reservation[]> {
        return (await this.reservationRepository.find({
            relations: [
                "gameMonitorings",
                "reservationDetails",
                "reservationDetails.reservation",
                "reservationDetails.space",
                "exhibitorMonitoring",
                "exhibitorMonitoring.exhibitor",
                "exhibitorMonitoring.festival"
            ]
        }))
            .filter(reservation => reservation.exhibitorMonitoring.festival.id === id);
    }

    async update(reservation: ReservationDto) {
        return this.reservationRepository.update(reservation.id, {
            mailingDate: reservation.mailingDate,
            paymentDate: reservation.paymentDate
        });
    }
}



