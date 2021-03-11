import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Festival} from "../festival/festival.entity";
import {GameMonitoring} from "../gameMonitoring/gameMonitoring.entity";

@Entity("area")
export class Area {

    @PrimaryGeneratedColumn({name: "id_area"})
    id: number;

    @Column({name: "label_area"})
    label: string;

    @ManyToOne(() => Festival)
    @Column("int", {name: "id_festival"})
    festival: Festival;

    @OneToMany(() => GameMonitoring, gameMonitoring => gameMonitoring.area)
    gameMonitorings: GameMonitoring[];
}
