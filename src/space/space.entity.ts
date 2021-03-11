import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Festival} from "../festival/festival.entity";
import {ReservationDetails} from "../reservationDetails/reservationDetails.entity";

@Entity("space")
export class Space {

    @PrimaryGeneratedColumn({name: "id_space"})
    id: number;

    @Column({name: "label_space"})
    label: string;

    @Column("double", {name: "table_price"})
    tablePrice: number;

    @Column("double", {name: "meter_price"})
    meterPrice: number;

    @Column({name: "table_total_number"})
    tableTotal: number;

    @Column({name: "table_remaining_number"})
    tableRemaining: number;

    @ManyToOne(() => Festival)
    @Column("int", {name: "id_festival"})
    festival: Festival;

    @OneToMany(() => ReservationDetails, reservationDetails => reservationDetails.space)
    reservationDetails: ReservationDetails[];
}
