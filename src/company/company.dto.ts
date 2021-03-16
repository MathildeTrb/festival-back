import {IsBoolean, IsEmail, IsString, Length} from "class-validator";

export class CompanyDto {

    id?:string;

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
}
