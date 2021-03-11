import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ReservationDetails} from "../reservationDetails/reservationDetails.entity";
import {ExhibitorMonitoring} from "../exhibitorMonitoring/exhibitorMonitoring.entity";
import {GameMonitoring} from "../gameMonitoring/gameMonitoring.entity";

@Entity("reservation")
export class Reservation {

    @PrimaryGeneratedColumn({name: "id_reservation"})
    id: number;

    @Column({name: "need_volunteer"})
    needVolunteer: boolean;

    @Column({name: "will_come"})
    willCome: boolean;

    @Column("text", {name: "comment_reservation"})
    comment: string;

    @Column("double", {name: "discount_reservation"})
    discount: number;

    @Column("datetime", {name: "mailing_date_reservation"})
    mailingDate: Date;

    @Column("datetime", {name: "payment_date_reservation"})
    paymentDate: Date;

    @OneToMany(() => ReservationDetails, reservationDetails => reservationDetails.reservation)
    reservationDetails: ReservationDetails[]

    @OneToMany(() => ExhibitorMonitoring, exhibitorMonitoring => exhibitorMonitoring.reservation)
    exhibitorMonitorings: ExhibitorMonitoring[]

    @OneToMany(() => GameMonitoring, gameMonitoring => gameMonitoring.reservation)
    gameMonitorings: GameMonitoring[]
}
