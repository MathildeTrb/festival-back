import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "../game/game.entity";

@Entity("company")
export class Company {
  @PrimaryGeneratedColumn({ name: "id_company" })
  id: number;

  @Column({ name: "name_company" })
  name: string;

  @Column({ name: "mail_company" })
  mail: string;

  @Column({ name: "address_company" })
  address: string;

  @Column({ name: "is_editor" })
  isEditor: string;

  @Column({name: "can_be_exhibitor"})
  canBeExhibitor: boolean;

  @Column({name: "is_deleted"})
  isDeleted: boolean;

  @OneToMany(() => Game, game => game.editor)
  games: Game[]

}