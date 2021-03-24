import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Festival} from "../festival/festival.entity";
import {GameMonitoring} from "../gameMonitoring/gameMonitoring.entity";
import {AreaDto} from "./area.dto";

@Entity("area")
export class Area {

    @PrimaryGeneratedColumn({name: "id_area"})
    id: number;

    @Column({name: "label_area"})
    label: string;

    @ManyToOne(() => Festival)
    @JoinColumn({name: "id_festival"})
    festival: Festival;

    @OneToMany(() => GameMonitoring, gameMonitoring => gameMonitoring.area)
    gameMonitorings: GameMonitoring[];

    static createFromDto(areaDto: AreaDto): Area {
        const area: Area = new Area();

        area.label = areaDto.label;

        return area;
    }
}
