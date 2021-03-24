import { Connection } from "typeorm";
import { Reservation } from "./reservation.entity";

export const reservationProviders = [
  {
    provide: 'RESERVATION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Reservation),
    inject: ['DATABASE_CONNECTION']
  }
]
