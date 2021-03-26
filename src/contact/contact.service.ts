import {Inject, Injectable} from "@nestjs/common";
import {Contact} from "./contact.entity";
import {ContactDto} from "./contact.dto";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ContactService {

    constructor(
        @InjectRepository(Contact)
        private readonly contactRepository: Repository<Contact>
    ) {}

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

    async getCompanyById(id: number): Promise<Contact> {
        return this.contactRepository.findOne(id, {
            relations: ["company"]
        })
    }

    async getAll(): Promise<Contact[]> {
        return this.contactRepository.find({
            order: {
                lastname: "ASC"
            }
        });
    }
}
