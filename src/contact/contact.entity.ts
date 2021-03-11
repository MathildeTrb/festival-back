import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Company} from "../company/company.entity";

@Entity("contact")
export class Contact {

    @PrimaryGeneratedColumn({name: "id_contact"})
    id: number;

    @Column({name: "firstname_contact"})
    firstname: string;

    @Column({name: "lastname_contact"})
    lastname: string;

    @Column({name: "mail_contact"})
    mail: string;

    @Column({name: "mobile_phone_number_contact"})
    mobilePhoneNumber: string;

    @Column({name: "fix_phone_number_contact"})
    fixPhoneNumber: string;

    @Column({name: "job_contact"})
    job: string;

    @Column({name: "is_important"})
    isImportant: boolean;

    @Column({name: "is_deleted"})
    isDeleted: boolean;

    @ManyToOne(() => Company)
    company: Company
}
