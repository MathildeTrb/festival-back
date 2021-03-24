import { Connection } from "typeorm";
import { ReservationDetails } from "./reservationDetails.entity";

export const reservationDetailsProviders = [
  {
    provide: 'RESERVATION_DETAILS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ReservationDetails),
    inject: ['DATABASE_CONNECTION'],
  }
]
