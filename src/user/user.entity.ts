import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}
