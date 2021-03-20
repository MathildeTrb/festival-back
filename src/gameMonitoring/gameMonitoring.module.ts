import { Module } from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {GameMonitoringService} from "./gameMonitoring.service";
import {gameProviders} from "../game/game.providers";
import {GameMonitoringController} from "./gameMonitoring.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        GameMonitoringService,
        ...gameProviders
    ],
    controllers: [GameMonitoringController]
})
export class GameMonitoringModule {}
