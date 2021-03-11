import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("festival")
export class Festival {

  @PrimaryGeneratedColumn({name: "id_festival"})
  id: number

  @Column({name: "name_festival"})
  name : string
}
