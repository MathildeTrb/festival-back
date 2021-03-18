import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserDto } from "./user.dto";
import * as bcrypt from 'bcrypt'
import { Inject } from "@nestjs/common";

@Entity("user")
export class User {

    @PrimaryGeneratedColumn({name: "id_user"})
    id: number;

    @Column({name: "firstname_user"})
    firstname: string;

    @Column({name: "lastname_user"})
    lastname: string;

    @Column({
      name: "mail_user",
      unique: true
    })
    mail: string;

    @Column({name: "password_user"})
    password: string;

    @Column({
        name: "is_first_login",
        default: true
    })
    isFirstLogin: boolean;

    @Column({
      name: "is_admin",
      default: false
    })
    isAdmin: boolean;

    static async createFromDto(userDto: UserDto) {
        const user: User = new User();
        const saltOrRounds = await bcrypt.genSalt();
        user.firstname = userDto.firstname;
        user.lastname = userDto.lastname;
        user.mail = userDto.mail;
        user.password = await bcrypt.hash(userDto.password, saltOrRounds);
        return user;
    }
}
