import {Inject, Injectable} from "@nestjs/common";
import {GameTypeRepository} from "./gameType.repository";
import {GameTypeDto} from "./gameType.dto";
import {GameType} from "./gameType.entity";

@Injectable()
export class GameTypeService {

    @Inject("GAME_TYPE_REPOSITORY")
    private readonly gameTypeRepository: GameTypeRepository;

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
