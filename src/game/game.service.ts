import {Inject, Injectable} from "@nestjs/common";
import {Game} from "./game.entity";
import {GameRepository} from "./game.repository";
import {GameDto} from "./game.dto";

@Injectable()
export class GameService {

    @Inject("GAME_REPOSITORY")
    private readonly gameRepository: GameRepository

    async getAll(): Promise<Game[]> {
        return this.gameRepository.findAvailable();
    }

    async create(gameDto: GameDto) {

        const game: Game = Game.createFromDto(gameDto);

        return this.gameRepository.save(game);
    }

    async update(gameDto: GameDto) {
        return this.gameRepository.update({ id: gameDto.id }, gameDto);
    }

    async delete(id: number) {
        return this.gameRepository.setUnavailable(id);
    }
}
