import { Inject, Injectable } from "@nestjs/common";
import { ExhibitorMonitoringRepository } from "./exhibitorMonitoring.repository";
import { ExhibitorMonitoringDto } from "./exhibitorMonitoring.dto";
import { ExhibitorMonitoring } from "./exhibitorMonitoring.entity";
import { Festival } from "../festival/festival.entity";
import { Company } from "../company/company.entity";


@Injectable()
export class ExhibitorMonitoringService{

    @Inject("EXHIBITOR_MONITORING_REPOSITORY")
    private readonly exhibitorMonitoringRepository : ExhibitorMonitoringRepository

    async create(festival : Festival, exhibitor : Company) {
        const exhibitorMonitoring: ExhibitorMonitoring = new ExhibitorMonitoring();

        exhibitorMonitoring.exhibitor = exhibitor;
        exhibitorMonitoring.festival = festival;

        return this.exhibitorMonitoringRepository.save(exhibitorMonitoring)
    }

    async getAll(): Promise<ExhibitorMonitoring[]>{
        return this.exhibitorMonitoringRepository.findAll();
    }

    async getByFestival(id: number): Promise<ExhibitorMonitoring[]>{
        return await this.exhibitorMonitoringRepository.getByFestival(id);
    }

    async update(exhibitorMonitoringDto: ExhibitorMonitoringDto) {
        return await this.exhibitorMonitoringRepository.update(
          {
              exhibitor: exhibitorMonitoringDto.exhibitor,
              festival: exhibitorMonitoringDto.festival
          }, {
              dateContact1: exhibitorMonitoringDto.dateContact1,
              dateContact2: exhibitorMonitoringDto.dateContact2,
              dateContact3: exhibitorMonitoringDto.dateContact3
          })
    }

    async getByFestivalAndExhibitor(idFestival: number, idExhibitor: number) {
        return this.exhibitorMonitoringRepository.find(
          {
            where: {festival: idFestival, exhibitor: idExhibitor},
              relations:["festival", "status", "exhibitor", "reservation"]
          }
        )
    }
}
