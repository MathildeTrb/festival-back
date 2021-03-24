import { Controller } from "@nestjs/common";
import { ReservationDetailsService } from "./reservationDetails.service";

@Controller("reservationDetails")
export class ReservationDetailsController{
  constructor(private readonly reservationDetailsService: ReservationDetailsService) {
  }


}
