import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {ContactService} from "./contact.service";
import {ContactDto} from "./contact.dto";

@Controller("contacts")
export class ContactController {

    constructor(private readonly contactService: ContactService) {}

    /**
     * @api {post} api/contacts Create a contact
     * @apiName CreateContact
     * @apiGroup contacts
     * @apiBody {ContactDto} contact
     */
    @Post()
    async create(@Body("contact") contact: ContactDto) {
        return this.contactService.create(contact)
    }

    @Put()
    async update(@Body("contact") contact: ContactDto) {
        return this.contactService.update(contact);
    }

    /**
     * @api {delete} api/contacts/:id Delete a contact by id
     * @apiName DeleteContact
     * @apiGroup contacts
     * @apiParam {int} id=4 Unique contacts id
     */
    @Delete(":id")
    async delete(@Param("id", ParseIntPipe) id: number) {
        return this.contactService.delete(id);
    }

    @Get(':id/companies')
    async getCompanyById(@Param("id", ParseIntPipe) id: number) {
        return await this.contactService.getCompanyById(id);
    }

    @Get()
    async getAll() {
        return await this.contactService.getAll();
    }

}
