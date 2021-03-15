import {Connection} from "typeorm";
import {GameRepository} from "./game.repository";

export const gameProviders = [
    {
        provide: "GAME_REPOSITORY",
        useFactory: (connection: Connection) => connection.getCustomRepository(GameRepository),
        inject: ["DATABASE_CONNECTION"]
    }
]
