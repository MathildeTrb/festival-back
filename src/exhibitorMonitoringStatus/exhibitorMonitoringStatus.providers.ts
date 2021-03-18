import {Connection} from "typeorm";
import {ExhibitorMonitoringStatus} from "./exhibitorMonitoringStatus.entity";

export const exhibitorMonitoringProviders = [
    {
        provide: 'EXHIBITOR_MONITORING_STATUS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(ExhibitorMonitoringStatus),
        inject: ['DATABASE_CONNECTION']
    }
]
