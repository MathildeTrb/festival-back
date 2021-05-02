import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import {CompanyService} from "./company.service";
import {CompanyDto} from "./company.dto";

@Controller("companies")
export class CompanyController {

    constructor(private readonly companyService: CompanyService) {}

    /**
     * @api {get} api/companies
     * @apiName GetAllAvailableCompanies
     * @apiGroup companies
     */
    @Get()
    async getAllAvailable() {
        return await this.companyService.getAllAvailable();
    }

    /**
     * @api {post} api/companies
     * @apiName CreateCompany
     * @apiGroup companies
     * @apiBody {companyDto} company added company
     */
    @Post()
    async create(@Body("company") company: CompanyDto) {
        return this.companyService.create(company);
    }

    /**
     * @api {put} api/companies
     * @apiName UpdateCompany
     * @apiGroup companies
     * @apiBody {companyDto} company updated company
     */
    @Put()
    async update(@Body("company") company: CompanyDto) {
        return await this.companyService.update(company);
    }

    /**
     * @api {delete} api/companies/:id
     * @apiName DeleteCompany
     * @apiGroup companies
     * @apiParam {int} id Companies unique id
     */
    @Delete(":id")
    async delete(@Param("id", ParseIntPipe) id: number) {
        return await this.companyService.delete(id);
    }

    /**
     * @api {get} api/companies/:id
     * @apiName GetCompanyById
     * @apiGroup companies
     * @apiParam {int} id Companies unique id
     */
    @Get(":id")
    async getById(@Param("id", ParseIntPipe) id: number) {
        return await this.companyService.getById(id);
    }

    @Get()
    async getAll(@Param("id", ParseIntPipe) id: number) {
        return await this.companyService.getAll()
    }
}
