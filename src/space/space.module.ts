import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { SpaceController } from "./space.controller";
import { SpaceService } from "./space.service";
import { spaceProviders } from "./space.providers";

@Module({
  imports: [DatabaseModule],
  providers: [
    ...spaceProviders,
    SpaceService
  ],
  controllers: [SpaceController],
  exports: [SpaceService]
})
export class SpaceModule {
}
