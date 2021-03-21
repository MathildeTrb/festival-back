import { Module } from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {GameMonitoringService} from "./gameMonitoring.service";
import {GameMonitoringController} from "./gameMonitoring.controller";
import {gameMonitoringProviders} from "./gameMonitoring.providers";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...gameMonitoringProviders,
        GameMonitoringService
    ],
    controllers: [GameMonitoringController]
})
export class GameMonitoringModule {}
