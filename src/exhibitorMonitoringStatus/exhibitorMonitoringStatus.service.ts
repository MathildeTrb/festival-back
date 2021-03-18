import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {ExhibitorMonitoringStatus} from "./exhibitorMonitoringStatus.entity";
import {ExhibitorMonitoringStatusDto} from "./exhibitorMonitoringStatus.dto";

@Injectable()
export class ExhibitorMonitoringStatusService {

    @Inject("EXHIBITOR_MONITORING_STATUS_REPOSITORY")
    private readonly exhibitorMonitoringStatusRepository : Repository<ExhibitorMonitoringStatus>

    async create(newEMS : ExhibitorMonitoringStatusDto){
        const EMS : ExhibitorMonitoringStatus = new ExhibitorMonitoringStatus();
        EMS.exhibitorMonitorings = newEMS.exhibitorMonitorings;
        EMS.id = newEMS.id;
        EMS.label = newEMS.label
    }

    async getAll() : Promise<ExhibitorMonitoringStatus[]>{
        return this.exhibitorMonitoringStatusRepository.find({
            order: {
                label: "ASC"
            }
        })
    }
}
