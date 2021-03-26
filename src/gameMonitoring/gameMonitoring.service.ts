import {Inject, Injectable} from "@nestjs/common";
import {GameMonitoring} from "./gameMonitoring.entity";
import {GameMonitoringDto} from "./gameMonitoring.dto";
import {GameMonitoringRepository} from "./gameMonitoring.repository"
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class GameMonitoringService {

    constructor(
        @InjectRepository(GameMonitoringRepository)
        private readonly gameMonitoringRepository: GameMonitoringRepository
    ) {
    }

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

    async getAllByFestival(id: number) {
        return this.gameMonitoringRepository.getAllByFestival(id)
    }

    async getGamesOfCurrentFestival() {
        return this.gameMonitoringRepository.findGamesOfCurrentFestival();
    }

}

