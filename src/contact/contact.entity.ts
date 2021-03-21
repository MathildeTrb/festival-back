import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {Company} from "../company/company.entity";
import {ContactDto} from "./contact.dto";

@Entity("contact")
export class Contact {

    @PrimaryGeneratedColumn({name: "id_contact"})
    id: number;

    @Column({name: "firstname_contact"})
    firstname: string;

    @Column({name: "lastname_contact"})
    lastname: string;

    @Column({
        name: "mail_contact",
        unique: true
    })
    mail: string;

    @Column({
        name: "mobile_phone_number_contact",
        nullable: true
    })
    mobilePhoneNumber: string;

    @Column({
        name: "fix_phone_number_contact",
        nullable: true
    })
    fixPhoneNumber: string;

    @Column({name: "job_contact"})
    job: string;

    @Column({
        name: "is_important",
        default: false
    })
    isImportant: boolean;

    @ManyToOne(() => Company)
    @JoinColumn({name: "id_company"})
    company: Company | number

    static createFromDto(contactDto: ContactDto): Contact {

        const contact: Contact = new Contact();

        contact.lastname = contactDto.lastname;
        contact.firstname = contactDto.firstname;
        contact.mail = contactDto.mail;
        contact.job = contactDto.job;
        contact.mobilePhoneNumber = contactDto.mobilePhoneNumber;
        contact.fixPhoneNumber = contactDto.fixPhoneNumber;
        contact.isImportant = contactDto.isImportant;
        contact.company = contactDto.company;

        return contact;
    }
}
