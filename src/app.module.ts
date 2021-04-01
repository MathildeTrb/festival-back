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
import {ConfigModule, ConfigService} from "@nestjs/config";
import {PhotoModule} from "./photo/photo.module";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath:".env",
            isGlobal:true
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: "mysql",
                host: configService.get<string>("TYPEORM_HOST"),
                username: configService.get<string>("TYPEORM_USERNAME"),
                password: configService.get<string>("TYPEORM_PASSWORD"),
                database: configService.get<string>("TYPEORM_DATABASE"),
                synchronize: true,
                logging: false,
                autoLoadEntities: true
            })
        }),
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
        PhotoModule
    ]
})
export class AppModule {}
