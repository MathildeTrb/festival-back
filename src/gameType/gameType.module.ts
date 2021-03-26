import { Module } from "@nestjs/common";
import {GameTypeService} from "./gameType.service";
import {GameTypeController} from "./gameType.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {GameType} from "./gameType.entity";

@Module({
    imports: [TypeOrmModule.forFeature([GameType])],
    providers: [
        GameTypeService
    ],
    controllers: [GameTypeController]
})
export class GameTypeModule {}
