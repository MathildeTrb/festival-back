import {Inject, Injectable} from "@nestjs/common";
import {Game} from "./game.entity";
import {GameRepository} from "./game.repository";
import {GameDto} from "./game.dto";
import {Area} from "../area/area.entity";

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

    async getGamesOfCurrentFestival() {
        const games: Game[] = await this.gameRepository.findGamesOfCurrentFestival();

        const res = [];

        games.forEach(({gameMonitorings, ...game}) => {
            const areas: Area[] = gameMonitorings.map<Area>(gameMonitoring => gameMonitoring.area);

            res.push({
                ...game,
                areas
            })
        })

        return res;
    }
}
