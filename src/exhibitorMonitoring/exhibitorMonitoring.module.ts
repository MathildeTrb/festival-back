import { Module } from '@nestjs/common';
import {ExhibitorMonitoringService} from "./exhibitorMonitoring.service";
import {ExhibitorMonitoringController} from "./exhibitorMonitoring.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ExhibitorMonitoring} from "./exhibitorMonitoring.entity";
import {CompanyModule} from "../company/company.module";


@Module({
    imports: [TypeOrmModule.forFeature([ExhibitorMonitoring]),CompanyModule],
    providers: [
        ExhibitorMonitoringService,
    ],
    exports: [ExhibitorMonitoringService],
    controllers: [ExhibitorMonitoringController]
})
export class ExhibitorMonitoringModule {}
