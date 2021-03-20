import {EntityRepository, Repository} from "typeorm";
import {GameMonitoring} from "./gameMonitoring.entity";

@EntityRepository(GameMonitoring)
export class GameMonitoringRepository extends Repository<GameMonitoring>{


}
