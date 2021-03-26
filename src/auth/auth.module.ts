import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { UserModule } from "../user/user.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService : ConfigService) => ({
        secret: configService.get<string>("SECRET"),
        signOptions: { expiresIn: '600000s' }
      }),
      inject: [ConfigService]
    })
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  exports:[AuthService,JwtModule]
})
export class AuthModule {}
