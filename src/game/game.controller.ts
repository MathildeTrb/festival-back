import {GameService} from "./game.service";
import {Body, Controller, Get, Post} from "@nestjs/common";
import {GameDto} from "./game.dto";

@Controller("games")
export class GameController {

    constructor(private readonly gameService: GameService) {}

    @Get()
    async getAll() {
        return await this.gameService.getAll();
    }

    @Post()
    async create(@Body("game") game: GameDto) {
        return await this.gameService.create(game)
    }
}
