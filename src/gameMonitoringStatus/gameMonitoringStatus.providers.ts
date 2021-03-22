import {Connection} from "typeorm";
import {GameMonitoringStatus} from "./gameMonitoringStatus.entity";

export const gameMonitoringStatusProviders = [
    {
        provide: "GAME_MONITORING_STATUS_PROVIDERS",
        useFactory: (connection: Connection) => connection.getRepository(GameMonitoringStatus),
        inject: ["DATABASE_CONNECTION"]
    }
]
