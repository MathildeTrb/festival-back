import {EntityRepository, Repository} from "typeorm";
import {Game} from "./game.entity";

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

}
