import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {GameMonitoringStatus} from "./gameMonitoringStatus.entity";

@Injectable()
export class GameMonitoringStatusService {

    @Inject("GAME_MONITORING_STATUS_REPOSITORY")
    private readonly gameMonitoringStatusRepository: Repository<GameMonitoringStatus>

    async getAll(): Promise<GameMonitoringStatus[]> {
        return this.gameMonitoringStatusRepository.find();
    }
}
