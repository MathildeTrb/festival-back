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

    async getGamesNotReceivedByfestival(id: number) {
        return this.find(
            {
                where: {

                }
            }

        )
    }
}
