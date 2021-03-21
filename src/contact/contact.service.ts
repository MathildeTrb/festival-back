import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Contact} from "./contact.entity";
import {ContactDto} from "./contact.dto";
import {ContactRepository} from "./contact.repository";

@Injectable()
export class ContactService{

    @Inject("CONTACT_REPOSITORY")
    private readonly contactRepository : ContactRepository

    async create(contactDto: ContactDto) {

        const contact: Contact = Contact.createFromDto(contactDto);

        return this.contactRepository.save(contact);
    }

    async update(contactDto: ContactDto) {
        return this.contactRepository.update({id: contactDto.id}, contactDto);
    }

    async delete(id: number) {
        return this.contactRepository.delete(id);
    }

   async getCompanyById(id: number): Promise<Contact>{
        return this.contactRepository.findCompanyById(id);
    }

    async getAll(): Promise<Contact[]>{
        return this.contactRepository.find({
            order:{
                lastname: "ASC"
            }
        });
    }
}
