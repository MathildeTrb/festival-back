import {EntityRepository, Repository} from "typeorm";
import {Game} from "./game.entity";
import {GameMonitoring} from "../gameMonitoring/gameMonitoring.entity";

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {

    async findAvailable(): Promise<Game[]> {
        return this.find({
            where: {
                isDeleted: false
            },
            order: {
                name: "ASC"
            },
            relations: ["editor", "type"]
        })
    }

    async findAll(): Promise<Game[]> {
        return this.find({
            order: {
                name: "ASC"
            },
            relations: ["editor", "type"]
        })
    }

    async setUnavailable(id: number) {
        return this.update({ id }, { isDeleted: true })
    }

    async findGamesOfCurrentFestival(): Promise<Game[]> {

        return this.createQueryBuilder("game")
            .innerJoinAndSelect("game.type", "type")
            .innerJoinAndSelect("game.editor", "editor")
            .innerJoinAndSelect("game.gameMonitorings", "gameMonitorings")
            .innerJoinAndSelect("gameMonitorings.area", "area")
            .innerJoin("area.festival", "festival")
            .where("festival.isCurrent = :value", {value: true})
            .getMany();
    }

    async getAllGamesByFestival(id:number): Promise<Game[]> {
        return this.createQueryBuilder("game")
            .innerJoinAndSelect("game.gameMonitorings", "gameMonitoring")
            .innerJoinAndSelect("gameMonitoring.area", "area")
            .innerJoinAndSelect("area.festival", "festival")
            .where("festival.id = :id", {id:id} )
            .getMany()
    }

    async getGamesNotPlacedByFestival(id:number): Promise<Game[]> {
        return this.createQueryBuilder("game")
            .innerJoinAndSelect("game.gameMonitorings", "gameMonitoring")
            .innerJoinAndSelect("gameMonitoring.area", "area")
            .innerJoinAndSelect("area.festival", "festival")
            .where("gameMonitoring.isPlaced = :value ", {value: false})
            .andWhere("festival.id = :id", {id:id} )
            .getMany()
    }

}
