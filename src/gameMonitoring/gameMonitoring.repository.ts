import {EntityRepository, Repository} from "typeorm";
import {GameMonitoring} from "./gameMonitoring.entity";

@EntityRepository(GameMonitoring)
export class GameMonitoringRepository extends Repository<GameMonitoring>{

    /*async getAllByFestival(id: number): Promise<GameMonitoring[]>{
        return await this.find({
            relations: ["reservation","reservation.exhibitorMonitoring", "reservation.exhibitorMonitoring.festival"],
            where: {
               reservation: {
                   exhibitorMonitoring : {
                       status: 4
                   }
                }
            }

        })
    }*/
    async getAllByFestival(id:number) : Promise<GameMonitoring[]>{
        const gameMonitorings = await this.createQueryBuilder("gameMonitoring")
            //.select("gameMonitoring" )
            .leftJoinAndSelect("gameMonitoring.game", "game")
            .leftJoinAndSelect("gameMonitoring.status", "status")
            .leftJoinAndSelect("gameMonitoring.area", "area")
            .leftJoinAndSelect("gameMonitoring.reservation", "reservation")
            .leftJoinAndSelect("reservation.exhibitorMonitoring", "exhibitorMonitoring")
            .leftJoinAndSelect("exhibitorMonitoring.festival", "festival")
            .where("festival.id = :id", {id:id})
            .getMany()
        return gameMonitorings
    }

}
