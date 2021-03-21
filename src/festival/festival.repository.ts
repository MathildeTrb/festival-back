import {EntityRepository, Repository} from "typeorm";
import {Festival} from "./festival.entity";
import {GameMonitoring} from "../gameMonitoring/gameMonitoring.entity";
import {GameMonitoringRepository} from "../gameMonitoring/gameMonitoring.repository";

@EntityRepository(Festival)
export class FestivalRepository extends Repository<Festival> {

    gameMonitoringRepo = new GameMonitoringRepository();

    async findWithExhibitorMonitoringsById(id: number): Promise<Festival> {
        return this.findOne(id, {
            relations: ["exhibitorMonitorings"]
        })
    }

    /*async findWithGameMonitoringsById(id:number) : Promise<GameMonitoring[]>{
        const gm = await this.gameMonitoringRepo.createQueryBuilder("gameMonitoring")
            .select("gameMonitoring.isPlaced" )
            .leftJoinAndSelect("gameMonitoring.reservation", "reservation")
            .leftJoinAndSelect("reservation.exhibitorMonitoring", "exhibitorMonitoring")
            .leftJoinAndSelect("exhibitorMonitoring.festival", "festival")
            .where("festival.id = :id", {id:id})
            .getMany()
        return gm;
    }*/


    /*async findWithGameMonitoringsById(id: number): Promise<Festival> {
        return this.findOne(id, {
            join: {
                exhibitorMonitorings:
            }
            relations: ["exhibitorMonitorings", "reservation","gameMonitorings"]
        })
    }*/



}
