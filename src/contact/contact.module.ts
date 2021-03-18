import {forwardRef, Module} from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {AuthModule} from "../auth/auth.module";
import {contactProviders} from "./contact.providers";
import {ContactService} from "./contact.service";
import {ContactController} from "./contact.controller";

@Module({
    imports: [DatabaseModule, AuthModule],
    providers: [
        ...contactProviders,
        ContactService
    ],
    exports: [ContactService],
    controllers: [ContactController]

})
export class ContactModule {}
