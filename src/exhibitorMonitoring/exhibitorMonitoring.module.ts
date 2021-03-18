import { Module } from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {ExhibitorMonitoringService} from "./exhibitorMonitoring.service";
import {exhibitorMonitoringProviders} from "./exhibitorMonitoring.providers";
import {ExhibitorMonitoringController} from "./exhibitorMonitoring.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...exhibitorMonitoringProviders,
        ExhibitorMonitoringService,
    ],
    exports: [ExhibitorMonitoringService],
    controllers: [ExhibitorMonitoringController]
})
export class ExhibitorMonitoringModule {}
