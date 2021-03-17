import {EntityRepository, Repository} from "typeorm";
import {Festival} from "./festival.entity";

@EntityRepository(Festival)
export class FestivalRepository extends Repository<Festival> {

    async findWithExhibitorMonitoringsById(id: number): Promise<Festival> {
        return this.findOne(id, {
            relations: ["exhibitorMonitorings"]
        })
    }

    async findWithGameMonitoringsById(id: number): Promise<Festival> {
        return this.findOne(id, {
            relations: ["gameMonitorings"]
        })
    }

}
