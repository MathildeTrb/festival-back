import {Connection} from "typeorm";
import {GameTypeRepository} from "./gameType.repository";

export const gameTypeProviders = [
    {
        provide: "GAME_TYPE_REPOSITORY",
        useFactory: (connection: Connection) => connection.getCustomRepository(GameTypeRepository),
        inject: ["DATABASE_CONNECTION"]
    }
]
