import { Module } from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {ExhibitorMonitoringStatusController} from "./exhibitorMonitoringStatus.controller"
import {exhibitorMonitoringStatusProviders} from "./exhibitorMonitoringStatus.providers";
import {ExhibitorMonitoringStatusService} from "./exhibitorMonitoringStatus.service";
@Module({
    imports: [DatabaseModule],
    providers: [
        ...exhibitorMonitoringStatusProviders,
        ExhibitorMonitoringStatusService
    ],
    controllers: [ExhibitorMonitoringStatusController]
})
export class ExhibitorMonitoringStatusModule {}
