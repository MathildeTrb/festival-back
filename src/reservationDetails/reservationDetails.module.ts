import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { reservationDetailsProviders } from "./reservationDetails.providers";
import { ReservationDetailsService } from "./reservationDetails.service";
import { ReservationDetailsController } from "./reservationDetails.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReservationDetails} from "./reservationDetails.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ReservationDetails])],
  providers: [
    ReservationDetailsService
  ],
  controllers: [ReservationDetailsController],
  exports: [ReservationDetailsService]
})
export class ReservationDetailsModule {
}
