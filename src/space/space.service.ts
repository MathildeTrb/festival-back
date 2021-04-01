import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Space } from "./space.entity";
import { Festival } from "../festival/festival.entity";
import { SpaceDto } from "./space.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class SpaceService {
  constructor(
    @InjectRepository(Space)
    private spaceRepository: Repository<Space>
  ) {
  }


  async create(newSpace: SpaceDto) {
    const space: Space = Space.createFromDto(newSpace);
    return this.spaceRepository.save(space);
  }

  async getAll(id: number) {
    return this.spaceRepository.find({
      where: {
        festival: id
      },
      order: {
        label: "ASC"
      }
    });
  }

  async updateTableRemaining(space : Space, tableRemaining: number) {
      return this.spaceRepository.update({id : space.id}, {tableRemaining : tableRemaining})
  }

  async update(space: Space) {
    return this.spaceRepository.update({id: space.id}, space)
  }
}

