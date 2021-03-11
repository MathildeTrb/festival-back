import {Column, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from "../user/user.entity";
import {Reservation} from "../reservation/reservation.entity";
import {MonitoringGameStatus} from "../monitoringGameStatus/monitoringGameStatus.entity";
import {Area} from "../area/area.entity";

export class MonitoringGame {

    @ManyToOne(() => MonitoringGame)
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

    @ManyToOne(() => MonitoringGameStatus)
    @Column({name: "id_monitoring_game_status"})
    status: MonitoringGameStatus

    @ManyToOne(() => Area)
    @Column({name: "id_area"})
    area: Area
}
