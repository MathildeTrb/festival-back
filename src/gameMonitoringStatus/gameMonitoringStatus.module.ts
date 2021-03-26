import {Module} from "@nestjs/common";
import {GameMonitoringStatusService} from "./gameMonitoringStatus.service";
import {GameMonitoringStatusController} from "./gameMonitoringStatus.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {GameMonitoringStatus} from "./gameMonitoringStatus.entity";

@Module({
    imports: [TypeOrmModule.forFeature([GameMonitoringStatus])],
    providers: [
        GameMonitoringStatusService
    ],
    controllers: [GameMonitoringStatusController]
})
export class GameMonitoringStatusModule {}
