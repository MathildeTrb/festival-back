import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Area} from "./area.entity";
import {AreaDto} from "./area.dto";
import {Game} from "../game/game.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AreaService {

    constructor(
        @InjectRepository(Area)
        private areaRepository: Repository<Area>
    ) {}

    async create(newArea: AreaDto) {
        const area: Area = Area.createFromDto(newArea);
        return this.areaRepository.save(area)
    }

    async getAllByIdFestival(id: number): Promise<Area[]> {
        return this.areaRepository.find({
            where: {
                festival: id
            },
            relations: [
                "gameMonitorings",
                "gameMonitorings.game",
                "gameMonitorings.game.type",
                "gameMonitorings.game.editor"
            ],
            order: {
                label: "ASC"
            }
        })
    }

    async getAllWithGamesByIdFestival(id: number) {

        const areas: Area[] = await this.getAllByIdFestival(id);

        const res = []

        areas.forEach(area => {

            const games: Game[] = area.gameMonitorings.map(gameMonitoring => gameMonitoring.game);

            res.push({
                id: area.id,
                label: area.label,
                games: games[0] ? games : []
            })
        })

        return res;
    }
}
