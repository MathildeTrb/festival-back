import { Module } from '@nestjs/common';
import {CompanyService} from "./company.service";
import {CompanyController} from "./company.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CompanyRepository} from "./company.repository";
import {Company} from "./company.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Company, CompanyRepository])],
    providers: [
        CompanyService
    ],
    controllers: [CompanyController],
    exports: [CompanyService]
})

export class CompanyModule {}
