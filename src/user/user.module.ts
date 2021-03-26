import { forwardRef, Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AuthModule } from "../auth/auth.module";
import { userProviders } from "./user.providers";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
    providers: [
      UserService,
    ],
    exports: [UserService],
    controllers: [UserController]
})
export class UserModule {}
