import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Festival } from "./festival.entity";
import { FestivalDto } from "./festival.dto";
import { SpaceDto } from "../space/space.dto";
import { SpaceService } from "../space/space.service";

@Injectable()
export class FestivalService {
  constructor(

    private readonly spaceService: SpaceService,

    @Inject("FESTIVAL_REPOSITORY")
    private festivalRepository: Repository<Festival>
  ) {
  }

  async addFestival(newFestival: FestivalDto, newSpaces: SpaceDto[]) {

    const festival: Festival = new Festival();
    festival.name = newFestival.name;
    festival.isCurrent = newFestival.isCurrent;
    if (festival.isCurrent) {
      await this.synchronizeFestival();
    }

    const savedFestival: Festival = await this.festivalRepository.save(festival);

    for (const space of newSpaces) {
       await this.spaceService.addSpace(savedFestival, space);
    }

    return savedFestival;
  }

  async synchronizeFestival() {
    return this.festivalRepository.update({ isCurrent: true }, { isCurrent: false });
  }

}
