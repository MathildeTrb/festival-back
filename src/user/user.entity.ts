import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ name: "id_user" })
  id: number;

  @Column({ name: "firstname_user" })
  firstName: string;

  @Column({ name: "lastname_user" })
  lastname: string;

  @Column({ name: "mail_user" })
  mail: string;

  @Column({ name: "password_user" })
  password: string;

  @Column({ name: "is_first_login" })
  isFirstLogin: boolean;

  @Column({ name: "is_admin" })
  isAdmin: boolean;
}