import {Game} from "../game/game.entity";
import {Reservation} from "../reservation/reservation.entity";
import {GameMonitoringStatus} from "../gameMonitoringStatus/gameMonitoringStatus.entity";
import {Area} from "../area/area.entity";

export class GameMonitoringDto {

    game: Game;
    reservation: Reservation;
    quantityExposed: number;
    quantityTombola: number;
    quantityDonation: number;
    isPlaced: boolean;
    needBeingReturned: boolean;
    returnedPrice: number;
    status: GameMonitoringStatus;
    area: Area;

}
