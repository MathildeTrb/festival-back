import {Connection} from "typeorm";
import {ContactRepository} from "./contact.repository";

export const contactProviders = [
    {
        provide: 'CONTACT_REPOSITORY',
        useFactory: (connection: Connection) => connection.getCustomRepository(ContactRepository),
        inject: ['DATABASE_CONNECTION']
    }
]
