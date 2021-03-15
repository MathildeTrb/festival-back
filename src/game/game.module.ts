import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import {GameService} from "./game.service";
import {gameProviders} from "./game.providers";
import {GameController} from "./game.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        GameService,
        ...gameProviders
    ],
    controllers: [GameController]
})
export class GameModule {}
