import { Module } from "@nestjs/common";
import { ReservationDetailsService } from "./reservationDetails.service";
import { ReservationDetailsController } from "./reservationDetails.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReservationDetails} from "./reservationDetails.entity";
import { SpaceModule } from "../space/space.module";

@Module({
  imports: [TypeOrmModule.forFeature([ReservationDetails]), SpaceModule],
  providers: [
    ReservationDetailsService
  ],
  controllers: [ReservationDetailsController],
  exports: [ReservationDetailsService]
})
export class ReservationDetailsModule {
}
