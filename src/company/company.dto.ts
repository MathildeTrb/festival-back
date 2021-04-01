import {IsBoolean, IsEmail, IsString, Length} from "class-validator";
import {Contact} from "../contact/contact.entity";
import {Game} from "../game/game.entity";

export class CompanyDto {

    id?:number;

    @IsString({
        message: "Nom incorrect"
    })
    @Length(1, 255, {
        message: "Longueur du nom trop grande"
    })
    name: string;

    @IsEmail({}, {
        message: "Mail incorrect"
    })
    @Length(1, 255, {
        message: "Longueur du mail trop grande"
    })
    mail: string

    @IsString({
        message: "Adresse incorrecte"
    })
    @Length(1, 255, {
        message: "Longueur de l'adresse trop grande"
    })
    address: string

    @IsBoolean()
    canBeExhibitor: boolean;

    //
    @IsBoolean()
    isDeleted: boolean;
    games: Game[]
    contacts: Contact[]
    //


    /*contacts: Contact[];

    games: Game[];*/
}
