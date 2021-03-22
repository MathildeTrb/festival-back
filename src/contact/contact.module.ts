import {Module} from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {contactProviders} from "./contact.providers";
import {ContactService} from "./contact.service";
import {ContactController} from "./contact.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...contactProviders,
        ContactService
    ],
    exports: [ContactService],
    controllers: [ContactController]

})
export class ContactModule {}
