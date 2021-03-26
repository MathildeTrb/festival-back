import {Connection} from "typeorm";
import {Contact} from "./contact.entity";

export const contactProviders = [
    {
        provide: 'CONTACT_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Contact),
        inject: ['DATABASE_CONNECTION']
    }
]
