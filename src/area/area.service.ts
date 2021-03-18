import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Area} from "./area.entity";
import {AreaDto} from "./area.dto";

@Injectable()
export class AreaService {
    constructor(
        @Inject("AREA_REPOSITORY")
        private areaRepository: Repository<Area>
    ) {}


    async create(newArea: AreaDto){
        const area : Area = Area.createFromDto(newArea);
        return this.areaRepository.save(area)
    }

    async getAll(): Promise<Area[]>{
        return this.areaRepository.find({
            order: {
                label: "ASC"
            }
        });
    }
}
