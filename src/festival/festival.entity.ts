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

    @Column("text", {
        name: "description_festival",
        nullable: true
    })
    description: string;

    @Column({
        name: "is_current",
        default: true
    })
    isCurrent: boolean;

    @CreateDateColumn({name: "creation_date_festival"})
    creationDate: Date;

    @Column({name: "image_url_festival"})
    imageUrl: string;

    @OneToMany(() => Space, space => space.festival)
    spaces: Space[];

    @OneToMany(() => Area, area => area.festival)
    areas: Area[];

    @OneToMany(() => ExhibitorMonitoring, exhibitorMonitoring => exhibitorMonitoring.festival)
    exhibitorMonitorings: ExhibitorMonitoring[];
}
