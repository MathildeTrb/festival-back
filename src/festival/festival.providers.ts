import { Connection} from 'typeorm';
import {FestivalRepository} from "./festival.repository";

export const festivalProviders = [
  {
    provide: 'FESTIVAL_REPOSITORY',
    useFactory: (connection: Connection) => connection.getCustomRepository(FestivalRepository),
    inject: ['DATABASE_CONNECTION'],
  },
];
