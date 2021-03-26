import {Module} from "@nestjs/common";
import {FestivalController} from './festival.controller';
import {FestivalService} from "./festival.service";
import {SpaceModule} from "../space/space.module";
import {CompanyModule} from "../company/company.module";
import {ExhibitorMonitoringModule} from "../exhibitorMonitoring/exhibitorMonitoring.module";
import {AreaModule} from "../area/area.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Festival} from "./festival.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Festival]), SpaceModule, CompanyModule, ExhibitorMonitoringModule, AreaModule],
    providers: [
        FestivalService
    ],
    exports: [FestivalService],
    controllers: [FestivalController]
})
export class FestivalModule {
}
