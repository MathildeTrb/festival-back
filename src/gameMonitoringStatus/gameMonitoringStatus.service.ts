import {Inject, Injectable} from "@nestjs/common";
import {GameMonitoringStatusDto} from "./gameMonitoringStatus.dto";
import {GameMonitoringStatus} from "./gameMonitoringStatus.entity";
import {Repository} from "typeorm";

@Injectable()
export class GameMonitoringStatusService{

    @Inject("GAME_MONITORING_STATUS_REPOSITORY")
    private readonly gameMonitoringStatusRepository: Repository<GameMonitoringStatus>

    async create(newGMS: GameMonitoringStatusDto){
        const  GMS : GameMonitoringStatus = new GameMonitoringStatus();
        GMS.gameMonitorings = newGMS.gameMonitorings;
        GMS.id = newGMS.id;
        GMS.label = newGMS.label
    }

}
