import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {User} from "../user/user.entity";
import {Reservation} from "../reservation/reservation.entity";
import {GameMonitoringStatus} from "../gameMonitoringStatus/gameMonitoringStatus.entity";
import {Area} from "../area/area.entity";
import { Game } from "../game/game.entity";
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


    static createFromDto(gameMonitoringDto : GameMonitoringDto): GameMonitoring{

        const gameM : GameMonitoring = new GameMonitoring();

        gameM.reservation = gameMonitoringDto.reservation;
        gameM.game = gameMonitoringDto.game;
        gameM.area = gameMonitoringDto.area;
        gameM.isPlaced = gameMonitoringDto.isPlaced;
        gameM.needBeingReturned = gameMonitoringDto.needBeingReturned;
        gameM.quantityDonation = gameMonitoringDto.quantityDonation;
        gameM.quantityExposed = gameMonitoringDto.quantityExposed;
        gameM.quantityTombola = gameMonitoringDto.quantityTombola;
        gameM.returnedPrice = gameMonitoringDto.returnedPrice;
        gameM.status = gameMonitoringDto.status;

        return gameM;
    }
}
