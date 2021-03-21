import {Connection} from "typeorm";
import {GameMonitoringRepository} from "./gameMonitoring.repository";

export const gameMonitoringProviders = [
    {
        provide: "GAME_MONITORING_REPOSITORY",
        useFactory: (connection: Connection) => connection.getCustomRepository(GameMonitoringRepository),
        inject: ["DATABASE_CONNECTION"]
    }
]
