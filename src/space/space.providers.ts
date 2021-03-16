import { Connection } from "typeorm";
import { Space } from "./space.entity";

export const spaceProviders = [
  {
    provide: 'SPACE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Space),
    inject: ['DATABASE_CONNECTION'],
  },
];