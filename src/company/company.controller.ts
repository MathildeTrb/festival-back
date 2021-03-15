import {Body, Controller, Get, Post} from "@nestjs/common";
import {CompanyService} from "./company.service";
import {CompanyDto} from "./company.dto";

@Controller("companies")
export class CompanyController {

    constructor(private readonly companyService: CompanyService) {}

    @Get()
    async getAllAvailable() {
        return await this.companyService.getAllAvailable();
    }

    @Post()
    async create(@Body("company") company: CompanyDto) {
        return this.companyService.create(company);
    }
}
