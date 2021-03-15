import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Game} from "../game/game.entity";
import {Contact} from "../contact/contact.entity";
import {CompanyDto} from "./company.dto";

@Entity("company")
export class Company {

    @PrimaryGeneratedColumn({name: "id_company"})
    id: number;

    @Column({name: "name_company"})
    name: string;

    @Column({
        name: "mail_company",
        unique: true
    })
    mail: string;

    @Column({name: "address_company"})
    address: string;

    @Column({
        name: "can_be_exhibitor",
        default: true
    })
    canBeExhibitor: boolean;

    @Column({
        name: "is_deleted",
        default: false
    })
    isDeleted: boolean;

    @OneToMany(() => Game, game => game.editor)
    games: Game[];

    @OneToMany(() => Contact, contact => contact.company)
    contacts: Contact[];

    static createFromDto(companyDto: CompanyDto): Company {
        const company: Company = new Company();

        company.name = companyDto.name;
        company.mail = companyDto.mail;
        company.address = companyDto.address;
        company.canBeExhibitor = companyDto.canBeExhibitor;

        return company;
    }
}
