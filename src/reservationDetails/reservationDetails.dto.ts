import { Reservation } from "../reservation/reservation.entity";
import { Space } from "../space/space.entity";

export class ReservationDetailsDto{
  reservation : Reservation;
  space: Space;
  tableReserved: number;
  meterReserved: number;
}
