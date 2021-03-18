import {EntityRepository, Repository} from "typeorm";
import {ExhibitorMonitoring} from "./exhibitorMonitoring.entity";

@EntityRepository(ExhibitorMonitoring)
export class ExhibitorMonitoringRepository extends Repository<ExhibitorMonitoring>{

    async findAll(){
        return this.find({
            order: {
                exhibitor: "ASC"
            }
        })
    }

    async getByFestival(id:number){
        return this.find({
            where: {
               festival : id
            }
        })
    }

}
