import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { reservationDetailsProviders } from "./reservationDetails.providers";
import { ReservationDetailsService } from "./reservationDetails.service";
import { ReservationDetailsController } from "./reservationDetails.controller";

@Module({
  imports: [DatabaseModule],
  providers: [
    ...reservationDetailsProviders,
    ReservationDetailsService
  ],
  controllers: [ReservationDetailsController],
  exports: [ReservationDetailsService]
})
export class ReservationDetailsModule {
}
