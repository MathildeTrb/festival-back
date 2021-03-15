import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { FestivalController } from './festival.controller';
import { festivalProviders } from "./festival.providers";
import { FestivalService } from "./festival.service";
import { SpaceModule } from "../space/space.module";
import { SpaceService } from "../space/space.service";

@Module({
  imports: [DatabaseModule, SpaceModule],
  providers: [
    ...festivalProviders,
    FestivalService
  ],
  exports: [FestivalService],
  controllers: [FestivalController]
})
export class FestivalModule {}