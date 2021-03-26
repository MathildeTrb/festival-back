import {Inject, Injectable} from "@nestjs/common";
import {GameTypeDto} from "./gameType.dto";
import {GameType} from "./gameType.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class GameTypeService {

    constructor(
        @InjectRepository(GameType)
        private readonly gameTypeRepository: Repository<GameType>
    ) {
    }

    async create(gameTypeDto: GameTypeDto) {

        const gameType: GameType = GameType.createFromDto(gameTypeDto);

        return this.gameTypeRepository.save(gameType);
    }

    async getAll(): Promise<GameType[]> {
        return this.gameTypeRepository.find({
            order: {
                label: "ASC"
            }
        });
    }



}
