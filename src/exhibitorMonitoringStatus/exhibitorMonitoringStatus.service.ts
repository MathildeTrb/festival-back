import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ExhibitorMonitoringStatus } from "./exhibitorMonitoringStatus.entity";
import { ExhibitorMonitoringStatusDto } from "./exhibitorMonitoringStatus.dto";

@Injectable()
export class ExhibitorMonitoringStatusService {

  @Inject("EXHIBITOR_MONITORING_STATUS_REPOSITORY")
  private readonly exhibitorMonitoringStatusRepository: Repository<ExhibitorMonitoringStatus>;

  async create(exhibitorMonitoringStatusDto: ExhibitorMonitoringStatusDto) {

    const exhibitorMonitoringStatus = new ExhibitorMonitoringStatus();

    exhibitorMonitoringStatus.label = exhibitorMonitoringStatusDto.label;

    return this.exhibitorMonitoringStatusRepository.save(exhibitorMonitoringStatus);
  }

  async getAll(): Promise<ExhibitorMonitoringStatus[]> {
    return this.exhibitorMonitoringStatusRepository.find({
      order: {
        label: "ASC"
      }
    });
  }

}
