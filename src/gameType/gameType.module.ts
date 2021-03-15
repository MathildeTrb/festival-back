import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import {gameTypeProviders} from "./gameType.providers";
import {GameTypeService} from "./gameType.service";
import {GameTypeController} from "./gameType.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...gameTypeProviders,
        GameTypeService
    ],
    controllers: [GameTypeController]
})
export class GameTypeModule {}
