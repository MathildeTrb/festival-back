import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Festival } from "./festival.entity";
import { FestivalDto } from "./festival.dto";
import { SpaceDto } from "../space/space.dto";
import { SpaceService } from "../space/space.service";
import { FestivalRepository } from "./festival.repository";
import { Company } from "../company/company.entity";
import { CompanyService } from "../company/company.service";
import { ExhibitorMonitoringService } from "../exhibitorMonitoring/exhibitorMonitoring.service";
import { GameMonitoring } from "../gameMonitoring/gameMonitoring.entity";
import { GameMonitoringRepository } from "../gameMonitoring/gameMonitoring.repository";

@Injectable()
export class FestivalService {
  constructor(
    private readonly spaceService: SpaceService,
    private readonly companyService: CompanyService,
    private readonly exhibitorMonitoringService: ExhibitorMonitoringService,
    @Inject("FESTIVAL_REPOSITORY")
    private festivalRepository: FestivalRepository
  ) {
  }

  async create(newFestival: FestivalDto, newSpaces: SpaceDto[]) {

    const festival: Festival = new Festival();
    festival.name = newFestival.name;
    festival.isCurrent = newFestival.isCurrent;
    if (festival.isCurrent) {
      await this.synchronizeFestival();
    }

    const savedFestival: Festival = await this.festivalRepository.save(festival);

    for (const space of newSpaces) {
      await this.spaceService.create(savedFestival, space);
    }

    const exhibitors: Company[] = await this.companyService.getAllAvailableExhibitor();

    exhibitors.map(async exhibitor => {
      await this.exhibitorMonitoringService.create(savedFestival, exhibitor);
    });

    return savedFestival;
  }

  async synchronizeFestival() {
    return this.festivalRepository.update(
      { isCurrent: true },
      { isCurrent: false }
    );
  }

  async getAll() {
    return this.festivalRepository.find({
      relations: ["spaces"]
    });
  }

  async getCurrent() {
    return this.festivalRepository.findOne({
      where: { isCurrent: true },
      relations: ["spaces"]
    });
  }

  async getById(id: number) {
    return this.festivalRepository.findOne(id);
  }

  /* async getWithGameMonitoringsById(id: number): Promise<GameMonitoring[]> {
        return this.gameMonitoringRepository.getAllByFestival(id)
        //return this.festivalRepository.findWithGameMonitoringsById(id);
    }*/

}
