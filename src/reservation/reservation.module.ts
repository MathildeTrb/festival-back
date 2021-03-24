import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { reservationProviders } from "./reservation.providers";
import { ReservationService } from "./reservation.service";
import { ReservationController } from "./reservation.controller";
import { ReservationDetailsModule } from "../reservationDetails/reservationDetails.module";

@Module({
    imports: [DatabaseModule, ReservationDetailsModule],
    providers: [
      ...reservationProviders,
      ReservationService
    ],
    controllers: [ReservationController]
})
export class ReservationModule {}
