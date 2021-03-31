import {GameService} from "./game.service";
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put
} from "@nestjs/common";
import {GameDto} from "./game.dto";
import {Game} from "./game.entity";

@Controller("games")
export class GameController {

    constructor(private readonly gameService: GameService) {}

    @Get("currentEditors")
    async getEditorsOfCurrentFestival(){
        console.log("COUCOU JE SUIS LA")
        return await this.gameService.getEditorsOfCurrentFestival();
    }


    @Get(":idFestival/allGames")
    async getAllGamesByFestival(@Param("idFestival", ParseIntPipe) id: number){
        console.log("GET ALL GAMES FESTIVAL")
        return await this.gameService.getAllGamesByFestival(id)
    }

    @Get(":idFestival/gamesNotPlaced")
    async getGamesNotPlacedByFestival(@Param("idFestival", ParseIntPipe) id: number){
        console.log("GET NOT PLACED GAMES FESTIVAL")
        return await this.gameService.getGamesNotPlacedByFestival(id)
    }

    @Get()
    async getAll() {
        return await this.gameService.getAll();
    }

    @Post()
    async create(@Body("game") game: GameDto) {
        return await this.gameService.create(game)
    }

    @Put()
    async update(@Body("game") game: GameDto) {
        return await this.gameService.update(game);
    }

    @Delete(":id")
    async delete(@Param("id", ParseIntPipe) id: number) {
        return await this.gameService.delete(id);
    }

    @Get("current")
    async getGamesOfCurrentFestival() {
        return await this.gameService.getGamesOfCurrentFestival();
    }








}

