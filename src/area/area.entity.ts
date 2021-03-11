import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Festival} from "../festival/festival.entity";

@Entity("area")
export class Area {
    @PrimaryGeneratedColumn({name: "id_area"})
    id: number

    @Column({name: "label_area"})
    label: string

    @ManyToOne(() => Festival)
    @Column({name: "id_festival"})
    festival: Festival
}
