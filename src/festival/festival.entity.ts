import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Area} from "../area/area.entity";
import {Space} from "../space/space.entity";
import {ExhibitorMonitoring} from "../exhibitorMonitoring/exhibitorMonitoring.entity";

@Entity("festival")
export class Festival {

    @PrimaryGeneratedColumn({name: "id_festival"})
    id: number;

    @Column({name: "name_festival"})
    name: string;

    @Column({
      name: "is_current",
      default: false
    })
    isCurrent: boolean;

    @CreateDateColumn({name: "creation_date_festival"})
    creationDate: Date

    @OneToMany(() => Space, space => space.festival)
    spaces: Space[];

    @OneToMany(() => Area, area => area.festival)
    areas: Area[];

    @OneToMany(() => ExhibitorMonitoring, exhibitorMonitoring => exhibitorMonitoring.festival)
    exhibitorMonitorings: ExhibitorMonitoring[];
}
