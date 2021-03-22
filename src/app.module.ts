import {Module} from "@nestjs/common";
import {AuthModule} from "./auth/auth.module";
import {AreaModule} from "./area/area.module";
import {CompanyModule} from "./company/company.module";
import {ContactModule} from "./contact/contact.module";
import {ExhibitorMonitoringModule} from "./exhibitorMonitoring/exhibitorMonitoring.module";
import {ExhibitorMonitoringStatusModule} from "./exhibitorMonitoringStatus/exhibitorMonitoringStatus.module";
import {FestivalModule} from "./festival/festival.module";
import {GameModule} from "./game/game.module";
import {GameMonitoringModule} from "./gameMonitoring/gameMonitoring.module";
import {GameMonitoringStatusModule} from "./gameMonitoringStatus/gameMonitoringStatus.module";
import {GameTypeModule} from "./gameType/gameType.module";
import {ReservationModule} from "./reservation/reservation.module";
import {ReservationDetailsModule} from "./reservationDetails/reservationDetails.module";
import {SpaceModule} from "./space/space.module";
import {UserModule} from "./user/user.module";
import {ConfigModule} from "@nestjs/config";
import {PhotoModule} from "./photo/photo.module";

@Module({
    imports: [
        AuthModule,
        AreaModule,
        CompanyModule,
        ContactModule,
        ExhibitorMonitoringModule,
        ExhibitorMonitoringStatusModule,
        FestivalModule,
        GameModule,
        GameMonitoringModule,
        GameMonitoringStatusModule,
        GameTypeModule,
        ReservationModule,
        ReservationDetailsModule,
        SpaceModule,
        UserModule,
        PhotoModule,
        ConfigModule.forRoot()
    ]
})
export class AppModule {}
