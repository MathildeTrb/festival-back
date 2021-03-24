import {Module} from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {areaProviders} from "./area.providers";
import {AreaService} from "./area.service";
import {AreaController} from "./area.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...areaProviders,
        AreaService,
    ],
    controllers:[AreaController],
    exports: [AreaService]
})
export class AreaModule {}
