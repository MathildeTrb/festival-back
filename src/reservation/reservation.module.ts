import {Module} from "@nestjs/common";
import {ReservationService} from "./reservation.service";
import {ReservationController} from "./reservation.controller";
import {ReservationDetailsModule} from "../reservationDetails/reservationDetails.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Reservation} from "./reservation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Reservation]), ReservationDetailsModule],
    providers: [
        ReservationService
    ],
    controllers: [ReservationController]
})
export class ReservationModule {
}
