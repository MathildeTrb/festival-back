import {Connection} from "typeorm";
import {ExhibitorMonitoring} from "./exhibitorMonitoring.entity";

export const exhibitorMonitoringProviders = [
    {
        provide: 'EXHIBITOR_MONITORING_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(ExhibitorMonitoring),
        inject: ['DATABASE_CONNECTION']
    }
]
