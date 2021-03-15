import {EntityRepository, Repository} from "typeorm";
import {GameType} from "./gameType.entity";

@EntityRepository(GameType)
export class GameTypeRepository extends Repository<GameType> {

    async findByLabel(label: string): Promise<GameType> {
        return this.findOne({
            where: {
                label
            },
            relations: ["games"]
        })
    }

    async findWithGamesById(id: number): Promise<GameType> {
        return this.findOne(id, {
            relations: ["games"]
        })
    }

}
