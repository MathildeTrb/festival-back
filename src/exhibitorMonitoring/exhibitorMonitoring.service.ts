import {Inject, Injectable} from "@nestjs/common";
import {ExhibitorMonitoringRepository} from "./exhibitorMonitoring.repository";
import {ExhibitorMonitoringDto} from "./exhibitorMonitoring.dto";
import {ExhibitorMonitoring} from "./exhibitorMonitoring.entity";



@Injectable()
export class ExhibitorMonitoringService{

    @Inject("EXHIBITOR_MONITORING_REPOSITORY")
    private readonly exhibitorMonitoringRepository : ExhibitorMonitoringRepository

    async create(newEM: ExhibitorMonitoringDto) {
        const em: ExhibitorMonitoring = new ExhibitorMonitoring();
        em.dateContact1 = newEM.dateContact1;
        em.dateContact2 = newEM.dateContact2;
        em.dateContact3 = newEM.dateContact3;

        em.exhibitor = newEM.exhibitor;
        em.festival = newEM.festival;
        em.status = newEM.status;
        em.reservation = newEM.reservation;
    }

    async getAll(): Promise<ExhibitorMonitoring[]>{
        return this.exhibitorMonitoringRepository.findAll();
    }

    async getByFestival(id: number): Promise<ExhibitorMonitoring[]>{
        return this.exhibitorMonitoringRepository.getByFestival(id);
    }

}
