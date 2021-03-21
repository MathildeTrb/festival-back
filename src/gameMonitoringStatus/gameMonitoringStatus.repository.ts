import {EntityRepository, Repository} from "typeorm";
import {GameMonitoringStatus} from "./gameMonitoringStatus.entity";

@EntityRepository(GameMonitoringStatus)
export class GameMonitoringStatusRepository extends Repository<GameMonitoringStatus>{


}
