import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { FestivalController } from './festival.controller';
import { festivalProviders } from "./festival.providers";
import { FestivalService } from "./festival.service";
import { SpaceModule } from "../space/space.module";
import { CompanyModule } from "../company/company.module";
import { ExhibitorMonitoringModule } from "../exhibitorMonitoring/exhibitorMonitoring.module";
import {AreaModule} from "../area/area.module";

@Module({
  imports: [DatabaseModule, SpaceModule, CompanyModule, ExhibitorMonitoringModule, AreaModule],
  providers: [
    ...festivalProviders,
    FestivalService
  ],
  exports: [FestivalService],
  controllers: [FestivalController]
})
export class FestivalModule {}
