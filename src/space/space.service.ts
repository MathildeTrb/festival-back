import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Space} from "./space.entity";
import {Festival} from "../festival/festival.entity";
import {SpaceDto} from "./space.dto";

@Injectable()
export class SpaceService {
    constructor(
        @Inject("SPACE_REPOSITORY")
        private spaceRepository: Repository<Space>
    ) {
    }


    async create(festival: Festival, newSpace: SpaceDto) {
        const space: Space = Space.createFromDto(festival, newSpace)
        return this.spaceRepository.save(space)
    }

    async getAll(id: number) {
        return this.spaceRepository.find({
            where: {
                festival: id
            },
            order: {
                label: "ASC"
            }
        })
    }
}

