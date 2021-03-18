import {forwardRef, Module} from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {AuthModule} from "../auth/auth.module";
import {areaProviders} from "./area.providers";
import {AreaService} from "./area.service";
import {AreaControllers} from "./area.controllers";

@Module({
    imports: [DatabaseModule, forwardRef(() => AuthModule)],
    providers: [
        ...areaProviders,
        AreaService,
    ],
    exports: [AreaService],
    controllers:[AreaControllers]
})
export class AreaModule {}
