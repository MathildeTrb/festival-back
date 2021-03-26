import {Module} from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {contactProviders} from "./contact.providers";
import {ContactService} from "./contact.service";
import {ContactController} from "./contact.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Contact} from "./contact.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Contact])],
    providers: [
        ContactService
    ],
    exports: [ContactService],
    controllers: [ContactController]

})
export class ContactModule {}
