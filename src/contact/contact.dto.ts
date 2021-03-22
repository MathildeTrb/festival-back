import {Company} from "../company/company.entity";

export class ContactDto{
    id?:number;
    firstname: string;
    lastname: string;
    mail: string;
    mobilePhoneNumber: string;
    fixPhoneNumber: string;
    job: string;
    isImportant: boolean;
    isDeleted: boolean;
    company: Company;
}
