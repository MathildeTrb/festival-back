import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {GameMonitoringStatus} from "./gameMonitoringStatus.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class GameMonitoringStatusService {

    constructor(@InjectRepository(GameMonitoringStatus)
                private readonly gameMonitoringStatusRepository: Repository<GameMonitoringStatus>) {
    }

    async getAll(): Promise<GameMonitoringStatus[]> {
        return this.gameMonitoringStatusRepository.find({
            order: {
                label: "ASC"
            }
        });
    }
}
