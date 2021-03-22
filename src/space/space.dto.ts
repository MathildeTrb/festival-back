import {Festival} from "../festival/festival.entity";
import {ReservationDetails} from "../reservationDetails/reservationDetails.entity";

export class SpaceDto{
  label: string;
  tablePrice: number;
  meterPrice: number;
  tableTotal: number;
  tableRemaining: number;
  festival: Festival;
  reservationDetails: ReservationDetails
}
