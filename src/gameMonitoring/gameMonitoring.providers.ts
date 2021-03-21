import {Connection} from "typeorm";
import {GameMonitoring} from "./gameMonitoring.entity";

export const gameMonitoringProviders = [
    {
        provide: "GAME_MONITORING_REPOSITORY",
        useFactory: (connection: Connection) => connection.getRepository(GameMonitoring),
        inject: ["DATABASE_CONNECTION"]
    }
]
