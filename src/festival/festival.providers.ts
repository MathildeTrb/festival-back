import { Connection} from 'typeorm';
import {Festival} from "./festival.entity";

export const festivalProviders = [
  {
    provide: 'FESTIVAL_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Festival),
    inject: ['DATABASE_CONNECTION'],
  },
];