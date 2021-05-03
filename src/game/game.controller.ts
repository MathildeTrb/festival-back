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

@Controller("games")
export class GameController {

    constructor(private readonly gameService: GameService) {}

    /**
     * @api {get} api/games/currentEditor get editor of current festival
     * @apiGroup games
     */
    @Get("currentEditor")
    async getEditorsOfCurrentFestival(){
        return await this.gameService.getEditorsOfCurrentFestival();
    }

    @Get("currentEditors/:idEditor")
    async getGamesByEditorOfCurrentFestival(@Param("idEditor", ParseIntPipe) id:number){
        console.log("games editor")
        return await this.gameService.getGamesByEditorOfCurrentFestival(id)
    }

    @Get(":idFestival/allGames")
    async getAllGamesByFestival(@Param("idFestival", ParseIntPipe) id: number){
        return await this.gameService.getAllGamesByFestival(id)
    }

    @Get(":idFestival/gamesNotPlaced")
    async getGamesNotPlacedByFestival(@Param("idFestival", ParseIntPipe) id: number){
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

