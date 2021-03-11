import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from "../user/user.entity";
import {Reservation} from "../reservation/reservation.entity";
import {GameMonitoringStatus} from "../gameMonitoringStatus/gameMonitoringStatus.entity";
import {Area} from "../area/area.entity";

@Entity("game_monitoring")
export class GameMonitoring {

    @ManyToOne(() => GameMonitoring)
    @PrimaryColumn("int", {name: "id_game"})
    game: User;

    @ManyToOne(() => Reservation)
    @PrimaryColumn("int", {name: "id_reservation"})
    reservation: Reservation;

    @Column({name: "quantity_exposed"})
    quantityExposed: number;

    @Column({name: "quantity_tombola"})
    quantityTombola: number;

    @Column({name: "quantity_donation"})
    quantityDonation: number;

    @Column({
        name: "is_placed",
        default: false
    })
    isPlaced: boolean

    @Column({
        name: "need_being_returned",
        default: false
    })
    needBeingReturned: boolean

    @Column("double", {name: "returned_price"})
    returnedPrice: number

    @ManyToOne(() => GameMonitoringStatus, gameMonitoringStatus => gameMonitoringStatus.gameMonitorings)
    @Column("int", {name: "id_game_monitoring_status"})
    status: GameMonitoringStatus

    @ManyToOne(() => Area, area => area.gameMonitorings)
    @Column("int", {name: "id_area"})
    area: Area
}
