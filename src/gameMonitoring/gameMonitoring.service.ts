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

    async create(gameMonitoringDto : GameMonitoringDto){
        const gameMonitoring: GameMonitoring = GameMonitoring.createFromDto(gameMonitoringDto);

        return this.gameMonitoringRepository.save(gameMonitoring)
    }

    async update(gameMonitoringDto: GameMonitoringDto){
        console.log(gameMonitoringDto)
        return this.gameMonitoringRepository.update({reservation: gameMonitoringDto.reservation, game: gameMonitoringDto.game}, gameMonitoringDto)
    }

    async getAllByFestival(id: number) {
        return this.gameMonitoringRepository.getAllByFestival(id)
    }

    async getGamesOfCurrentFestival() {
        return this.gameMonitoringRepository.findGamesOfCurrentFestival();
    }

    async getGamesNotReceivedByFestival(id: number){
        return await this.gameMonitoringRepository.getGamesNotReceivedByFestival(id)
    }

    async getGamesNotPlacedByFestival(id: number) : Promise<GameMonitoring[]> {
        return await this.gameMonitoringRepository.getGamesNotPlacedByFestival(id)
    }

    async delete(idReservation: number, idGame: number) {
        return this.gameMonitoringRepository.delete({
            reservation: {
                id: idReservation
            },
            game: {
                id: idGame
            }
        })
    }
}

