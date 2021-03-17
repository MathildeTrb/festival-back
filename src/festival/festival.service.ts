import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Festival} from "./festival.entity";
import {FestivalDto} from "./festival.dto";
import {SpaceDto} from "../space/space.dto";
import {SpaceService} from "../space/space.service";
import {FestivalRepository} from "./festival.repository";

@Injectable()
export class FestivalService {
    constructor(
        private readonly spaceService: SpaceService,
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

        return savedFestival;
    }

    async synchronizeFestival() {
        return this.festivalRepository.update(
            {isCurrent: true},
            {isCurrent: false}
        );
    }

    async getAll() {
        return this.festivalRepository.find();
    }

    async getCurrent() {
        return this.festivalRepository.findOne({
                where: {isCurrent: true}
            })
    }

    async getById(id: number) {
        return this.festivalRepository.findOne(id)
    }

    async getWithGameMonitoringsById(id: number): Promise<Festival> {
        return this.festivalRepository.findWithGameMonitoringsById(id);
    }

}
