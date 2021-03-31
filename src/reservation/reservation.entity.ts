import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
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

    @Column("double", {
        name: "discount_reservation",
        default: 0
    })
    discount: number;

    @Column("date", {
        name: "mailing_date_reservation",
        nullable: true
    })
    mailingDate: Date;

    @Column("date", {
        name: "payment_date_reservation",
        nullable: true
    })
    paymentDate: Date;

    @OneToMany(() => ReservationDetails, reservationDetails => reservationDetails.reservation)
    reservationDetails: ReservationDetails[]

    @OneToOne(() => ExhibitorMonitoring, exhibitorMonitoring => exhibitorMonitoring.reservation)
    exhibitorMonitoring: ExhibitorMonitoring

    @OneToMany(() => GameMonitoring, gameMonitoring => gameMonitoring.reservation)
    gameMonitorings: GameMonitoring[]
}
