import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {gameMonitoringStatusProviders} from "./gameMonitoringStatus.providers";
import {GameMonitoringStatusService} from "./gameMonitoringStatus.service";
import {GameMonitoringStatusController} from "./gameMonitoringStatus.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...gameMonitoringStatusProviders,
        GameMonitoringStatusService
    ],
    controllers: [GameMonitoringStatusController]
})
export class GameMonitoringStatusModule {}
