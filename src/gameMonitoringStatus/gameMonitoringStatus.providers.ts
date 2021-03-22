import {Connection} from "typeorm";
import {GameMonitoringStatus} from "./gameMonitoringStatus.entity";

export const gameMonitoringStatusProviders = [
    {
        provide: "GAME_MONITORING_STATUS_REPOSITORY",
        useFactory: (connection: Connection) => connection.getRepository(GameMonitoringStatus),
        inject: ["DATABASE_CONNECTION"]
    }
]
