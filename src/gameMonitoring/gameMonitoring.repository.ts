import {EntityRepository, Equal, Repository} from "typeorm";
import {GameMonitoring} from "./gameMonitoring.entity";
import {Game} from "../game/game.entity";

@EntityRepository(GameMonitoring)
export class GameMonitoringRepository extends Repository<GameMonitoring> {

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

    async getAllByFestival(id: number): Promise<GameMonitoring[]> {
        return this.createQueryBuilder("gameMonitoring")
            //.select("gameMonitoring" )
            .innerJoinAndSelect("gameMonitoring.game", "game")
            .innerJoinAndSelect("gameMonitoring.status", "status")
            .innerJoinAndSelect("gameMonitoring.area", "area")
            .innerJoinAndSelect("gameMonitoring.reservation", "reservation")
            .innerJoinAndSelect("reservation.exhibitorMonitoring", "exhibitorMonitoring")
            .innerJoinAndSelect("exhibitorMonitoring.exhibitor", "exhibitor")
            .innerJoinAndSelect("exhibitorMonitoring.festival", "festival")
            .where("festival.id = :id", {id: id})
            .getMany();
    }



    async findGamesOfCurrentFestival() {
        return this.find({
            where: {
                reservation: {
                    exhibitorMonitoring: {
                        festival: {
                            isCurrent: true
                        }
                    }
                }
            }
        })
    }

    async getGamesNotReceivedByFestival(id: number) {
        return this.createQueryBuilder("gameMonitoring")
            .innerJoinAndSelect("gameMonitoring.game", "game")
            .innerJoinAndSelect("gameMonitoring.status", "status")
            .innerJoinAndSelect("gameMonitoring.area", "area")
            .innerJoinAndSelect("gameMonitoring.reservation", "reservation")
            .innerJoinAndSelect("reservation.exhibitorMonitoring", "exhibitorMonitoring")
            .innerJoinAndSelect("exhibitorMonitoring.exhibitor", "exhibitor")
            .innerJoinAndSelect("exhibitorMonitoring.festival", "festival")
            .where("festival.id = :id", {id: id})
            .where("gameMonitoring.isPlaced = :isPlaced", {isPlaced: false})
            .getMany();
    }

    async getGamesNotPlacedByFestival(id: number): Promise<GameMonitoring[]>{
       return this.find(
           {
               where: {
                    reservation:{
                        exhibitorMonitoring :{
                            festival: 6
                        }
                    }
               },
               relations: []
           }

       )



        /*return this.find(
            {
                where: {
                    isPlaced: false,
                    reservation:{
                        exhibitorMonitoring:{
                            festival: id
                        }
                    },

                },
                relations: []
            }
        )*/
    }

}
