import {Inject, Injectable} from "@nestjs/common";
import {GameMonitoring} from "./gameMonitoring.entity";
import {GameMonitoringDto} from "./gameMonitoring.dto";
import {Repository} from "typeorm";

@Injectable()
export class GameMonitoringService {

    @Inject("GAME_MONITORING_REPOSITORY")
    private readonly gameMonitoringRepository: Repository<GameMonitoring>

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

