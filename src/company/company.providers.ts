import {Connection} from "typeorm";
import {CompanyRepository} from "./company.repository";

export const companyProviders = [
    {
        provide: "COMPANY_REPOSITORY",
        useFactory: (connection: Connection) => connection.getCustomRepository(CompanyRepository),
        inject: ["DATABASE_CONNECTION"]
    }
]
