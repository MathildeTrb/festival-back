import { Module } from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {GameMonitoringService} from "./gameMonitoring.service";
import {GameMonitoringController} from "./gameMonitoring.controller";
import {gameMonitoringProviders} from "./gameMonitoring.providers";
import {TypeOrmModule} from "@nestjs/typeorm";
import {GameMonitoring} from "./gameMonitoring.entity";
import {GameMonitoringRepository} from "./gameMonitoring.repository";

@Module({
    imports: [TypeOrmModule.forFeature([GameMonitoring, GameMonitoringRepository])],
    providers: [
        GameMonitoringService
    ],
    controllers: [GameMonitoringController]
})
export class GameMonitoringModule {}
