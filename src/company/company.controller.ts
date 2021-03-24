import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
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

    @Put()
    async update(@Body("company") company: CompanyDto) {
        return await this.companyService.update(company);
    }

    @Delete(":id")
    async delete(@Param("id", ParseIntPipe) id: number) {
        return await this.companyService.delete(id);
    }

    @Get(":id")
    async getById(@Param("id", ParseIntPipe) id: number) {

    }
}
