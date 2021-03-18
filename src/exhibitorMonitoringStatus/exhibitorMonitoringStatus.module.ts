import { Module } from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {ExhibitorMonitoringStatusController} from "./exhibitorMonitoringStatus.controller"
import {exhibitorMonitoringProviders} from "./exhibitorMonitoringStatus.providers";
import {ExhibitorMonitoringStatusService} from "./exhibitorMonitoringStatus.service";
@Module({
    imports: [DatabaseModule],
    providers:[
        ...exhibitorMonitoringProviders,
        ExhibitorMonitoringStatusService,
    ],
    exports: [ExhibitorMonitoringStatusService],
    controllers: [ExhibitorMonitoringStatusController]
})
export class ExhibitorMonitoringStatusModule {}
