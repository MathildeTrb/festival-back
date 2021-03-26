import {Connection} from "typeorm";
import {GameType} from "./gameType.entity";

export const gameTypeProviders = [
    {
        provide: "GAME_TYPE_REPOSITORY",
        useFactory: (connection: Connection) => connection.getRepository(GameType),
        inject: ["DATABASE_CONNECTION"]
    }
]
