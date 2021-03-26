import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { SpaceController } from "./space.controller";
import { SpaceService } from "./space.service";
import { spaceProviders } from "./space.providers";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Space} from "./space.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Space])],
  providers: [
    SpaceService
  ],
  controllers: [SpaceController],
  exports: [SpaceService]
})
export class SpaceModule {
}
