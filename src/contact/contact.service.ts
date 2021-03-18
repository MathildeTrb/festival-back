import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Contact} from "./contact.entity";
import {ContactDto} from "./contact.dto";
import {Company} from "../company/company.entity";
import {ContactRepository} from "./contact.repository";
import {Area} from "../area/area.entity";

@Injectable()
export class ContactService{

    @Inject("CONTACT_REPOSITORY")
    private readonly contactRepository : ContactRepository

    async create(newContact: ContactDto){
        const contact: Contact = new Contact();
        contact.company = newContact.company;
        contact.firstname = newContact.firstname;
        contact.fixPhoneNumber = newContact.fixPhoneNumber;
        contact.isDeleted = newContact.isDeleted;
        contact.lastname = newContact.lastname;
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
