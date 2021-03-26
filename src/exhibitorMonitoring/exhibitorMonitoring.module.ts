import { Module } from '@nestjs/common';
import {ExhibitorMonitoringService} from "./exhibitorMonitoring.service";
import {ExhibitorMonitoringController} from "./exhibitorMonitoring.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ExhibitorMonitoring} from "./exhibitorMonitoring.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ExhibitorMonitoring])],
    providers: [
        ExhibitorMonitoringService,
    ],
    exports: [ExhibitorMonitoringService],
    controllers: [ExhibitorMonitoringController]
})
export class ExhibitorMonitoringModule {}
