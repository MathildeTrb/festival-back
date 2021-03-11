import { forwardRef, Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AuthModule } from "../auth/auth.module";
import { userProviders } from "./user.providers";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    imports: [DatabaseModule, forwardRef(() => AuthModule)],
    providers: [
      ...userProviders,
      UserService,
    ],
    exports: [UserService],
    controllers: [UserController]
})
export class UserModule {}
