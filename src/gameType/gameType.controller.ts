import {Body, Controller, Get, Post} from "@nestjs/common";
import {GameTypeService} from "./gameType.service";
import {GameTypeDto} from "./gameType.dto";

@Controller("gameTypes")
export class GameTypeController {

    constructor(private readonly gameTypeService: GameTypeService) {}

    @Get()
    async getAll() {
        return await this.gameTypeService.getAll();
    }

    @Post()
    async create(@Body("gameType") gameType: GameTypeDto) {
        return await this.gameTypeService.create(gameType);
    }

}
