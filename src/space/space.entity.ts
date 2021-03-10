import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Festival } from "../festival/festival.entity";

@Entity("space")
export class Space {
  @PrimaryGeneratedColumn({name: "id_space"})
  id: number

  @Column({name: "label_space"})
  label: string

  @Column("double", {name: "table_price"})
  tablePrice: number

  @Column("double", {name: "meter_price"})
  meterPrice: number

  @Column({name: "table_total_number"})
  tableTotal: number

  @Column({name: "table_remaining_number"})
  tableRemaining: number

  @ManyToOne(() => Festival)
  festival: Festival

}