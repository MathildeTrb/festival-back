import {EntityRepository, Repository} from "typeorm";
import {Contact} from "./contact.entity";
import {Company} from "../company/company.entity";

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact>{

    async findAll(): Promise<Contact[]>{
        return this.find({
            order:{
                firstname: "ASC"
            }
        })
    }

    async findCompanyById(id: number): Promise<Contact>{
        const contact = this.findOne(id, {

            relations: ["company"]
        })
        return contact;
    }
}
