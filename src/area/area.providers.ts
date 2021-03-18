import {Connection} from "typeorm";
import {Area} from "./area.entity";

export const areaProviders = [
    {
        provide: 'AREA_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Area),
        inject: ['DATABASE_CONNECTION']
    }
]
