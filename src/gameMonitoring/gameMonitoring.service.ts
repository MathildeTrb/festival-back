import {Inject, Injectable} from "@nestjs/common";
import {GameMonitoringRepository} from "./gameMonitoring.repository";
import {Reservation} from "../reservation/reservation.entity";
import {Game} from "../game/game.entity";
import {Area} from "../area/area.entity";
import {GameMonitoring} from "./gameMonitoring.entity";
import {GameMonitoringDto} from "./gameMonitoring.dto";

@Injectable()
export class GameMonitoringService {

    @Inject("GAME_MONITORING_REPOSITORY")
    private readonly gameMonitoringRepository: GameMonitoringRepository

    async create(gameMDto : GameMonitoringDto){
        const gameMonitoring: GameMonitoring = new GameMonitoring();

        gameMonitoring.reservation = gameMDto.reservation;
        gameMonitoring.area = gameMDto.area;
        gameMonitoring.game = gameMDto.game;

        return this.gameMonitoringRepository.save(gameMonitoring)
    }

    async update(gameMDto: GameMonitoringDto){
        return this.gameMonitoringRepository.update({reservation: gameMDto.reservation, game: gameMDto.game}, gameMDto)
    }


}

