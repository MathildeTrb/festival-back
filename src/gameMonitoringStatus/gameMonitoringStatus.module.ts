import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {gameMonitoringProviders} from "../gameMonitoring/gameMonitoring.providers";
import {GameMonitoringService} from "../gameMonitoring/gameMonitoring.service";


@Module({
    imports: [DatabaseModule],
    providers: [
        GameMonitoringService,
        ...gameMonitoringProviders
    ]
})
export class GameMonitoringStatusModule {}
