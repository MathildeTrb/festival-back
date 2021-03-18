import {Connection} from "typeorm";
import {ExhibitorMonitoringRepository} from "./exhibitorMonitoring.repository";

export const exhibitorMonitoringProviders = [
    {
        provide: 'EXHIBITOR_MONITORING_REPOSITORY',
        useFactory: (connection: Connection) => connection.getCustomRepository(ExhibitorMonitoringRepository),
        inject: ['DATABASE_CONNECTION']
    }
]
