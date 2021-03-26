import { Module } from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {ExhibitorMonitoringStatusController} from "./exhibitorMonitoringStatus.controller"
import {exhibitorMonitoringStatusProviders} from "./exhibitorMonitoringStatus.providers";
import {ExhibitorMonitoringStatusService} from "./exhibitorMonitoringStatus.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ExhibitorMonitoringStatus} from "./exhibitorMonitoringStatus.entity";
@Module({
    imports: [TypeOrmModule.forFeature([ExhibitorMonitoringStatus])],
    providers: [
        ExhibitorMonitoringStatusService
    ],
    controllers: [ExhibitorMonitoringStatusController]
})
export class ExhibitorMonitoringStatusModule {}
