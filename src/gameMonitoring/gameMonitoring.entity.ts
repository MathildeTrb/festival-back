import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {User} from "../user/user.entity";
import {Reservation} from "../reservation/reservation.entity";
import {GameMonitoringStatus} from "../gameMonitoringStatus/gameMonitoringStatus.entity";
import {Area} from "../area/area.entity";
import {Game} from "../game/game.entity";
import {GameMonitoringDto} from "./gameMonitoring.dto";

@Entity("game_monitoring")
export class GameMonitoring {

    @ManyToOne(() => Game, {primary: true})
    @JoinColumn({name: "id_game"})
    game: Game;

    @ManyToOne(() => Reservation, {primary: true})
    @JoinColumn({name: "id_reservation"})
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
    @JoinColumn({name: "id_game_monitoring_status"})
    status: GameMonitoringStatus

    @ManyToOne(() => Area, area => area.gameMonitorings)
    @JoinColumn({name: "id_area"})
    area: Area

    @UpdateDateColumn({
        type: "datetime",
        name: "date_update"
    })
    dateUpdate: Date

    static createFromDto(gameMonitoringDto: GameMonitoringDto): GameMonitoring {

        const gameMonitoring: GameMonitoring = new GameMonitoring();

        gameMonitoring.reservation = gameMonitoringDto.reservation;
        gameMonitoring.game = gameMonitoringDto.game;
        gameMonitoring.area = gameMonitoringDto.area;
        gameMonitoring.isPlaced = gameMonitoringDto.isPlaced;
        gameMonitoring.needBeingReturned = gameMonitoringDto.needBeingReturned;
        gameMonitoring.quantityDonation = gameMonitoringDto.quantityDonation;
        gameMonitoring.quantityExposed = gameMonitoringDto.quantityExposed;
        gameMonitoring.quantityTombola = gameMonitoringDto.quantityTombola;
        gameMonitoring.returnedPrice = gameMonitoringDto.returnedPrice;
        gameMonitoring.status = gameMonitoringDto.status;

        return gameMonitoring;
    }
}
