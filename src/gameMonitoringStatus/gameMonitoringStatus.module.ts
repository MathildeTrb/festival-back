import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {GameMonitoringStatusService} from "./gameMonitoringStatus.service";
import {gameMonitoringStatusProviders} from "./gameMonitoringStatus.providers";


@Module({
    imports: [DatabaseModule],
    providers: [
        GameMonitoringStatusService,
        ...gameMonitoringStatusProviders
    ]
})
export class GameMonitoringStatusModule {}
