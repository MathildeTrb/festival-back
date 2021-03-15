import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {Reservation} from "../reservation/reservation.entity";
import {Space} from "../space/space.entity";

@Entity("reservation_details")
export class ReservationDetails {

    @ManyToOne(() => Reservation, {primary: true})
    @JoinColumn({name: "id_reservation"})
    reservation: Reservation;

    @ManyToOne(() => Space, {primary: true})
    @JoinColumn( {name: "id_space"})
    space: Space;

    @Column("double", {name: "table_reserved_number"})
    tableReserved: number;

    @Column("double", {name: "meter_reserved_number"})
    meterReserved: number;
}
