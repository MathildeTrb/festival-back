import {Body, Controller, Get, Param, ParseIntPipe, Post} from "@nestjs/common";
import {AreaService} from "./area.service";
import {AreaDto} from "./area.dto";

@Controller("areas")
export class AreaController {
    constructor(private readonly areaService: AreaService) {}

    @Post()
    async create(@Body("area") area: AreaDto) {
        return await this.areaService.create(area)
    }

    @Get(":id")
    async getAllByIdFestival(@Param("id", ParseIntPipe) id: number) {
        return await this.areaService.getAllByIdFestival(id);
    }

    @Get(":id/games")
    async getAllWithGamesByIdFestival(@Param("id", ParseIntPipe) id: number) {
        return await this.areaService.getAllWithGamesByIdFestival(id);
    }

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

