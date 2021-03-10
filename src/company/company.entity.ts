import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  //TODO: est ce que l'on met un oneToMany pour avoir un tableau de jeu par éditeur
  //je pense que oui mais j'ai peur qu'on arrive pas a gérer le isEditor
}