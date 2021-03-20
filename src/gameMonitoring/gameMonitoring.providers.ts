import {Connection} from "typeorm";
import {GameMonitoringDto} from "./gameMonitoring.dto";

export const gameMonitoringProviders = [
    {
        provide: "GAME_MONITORING_PROVIDERS",
        useFactory: (connection: Connection) => connection.getCustomRepository(GameMonitoringDto),
        inject: ["DATABASE_CONNECTION"]
    }
]
