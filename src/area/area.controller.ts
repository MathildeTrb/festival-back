import {Body, Controller, Get, Param, ParseIntPipe, Post} from "@nestjs/common";
import {AreaService} from "./area.service";
import {AreaDto} from "./area.dto";

@Controller("areas")
export class AreaController {
    constructor(private readonly areaService: AreaService) {}

    /**
     * @api {post} /api/areas Create a new area
     * @apiName CreateArea
     * @apiGroup areas
     * @apiBody {AreaDto} area added Area
     */
    @Post()
    async create(@Body("area") area: AreaDto) {
        return await this.areaService.create(area)
    }

    /**
     * @api {get} /api/areas/id Get an area by id
     * @apiName GetAreaById
     * @apiGroup areas
     * @apiParam {int} id Areas unique Id
     */
    @Get(":id")
    async getAllByIdFestival(@Param("id", ParseIntPipe) id: number) {
        return await this.areaService.getAllByIdFestival(id);
    }

    /**
     * @api {get} api/areas/:id/games Get all the games of an area
     * @apiName GetGamesFromArea
     * @apiGroup areas/games
     * @apiParam {int} id Areas unique Id
     */
    @Get(":id/games")
    async getAllWithGamesByIdFestival(@Param("id", ParseIntPipe) id: number) {
        return await this.areaService.getAllWithGamesByIdFestival(id);
    }

    /**
     * @api {get} api/areas/current/:idGames get all areas for a game in current festival
     * @apiName GetAreasByGameCurrent
     * @apiGroup areas
     * @apiParam {int} idGame Games unique Id
     */
    @Get("current/:idGame")
    async getAreasByGame(@Param("idGame", ParseIntPipe) idGame: number) {
        return (await this.areaService.getAreasByGame(idGame)).map(({festival, ...area}) => {
            return {
                ...area,
                games: []
            }
        });
    }
}

