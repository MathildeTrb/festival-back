import {Controller, Get} from "@nestjs/common";
import {GameTypeService} from "./gameType.service";

@Controller("gameTypes")
export class GameTypeController {

    constructor(private readonly gameTypeService: GameTypeService) {}

    @Get()
    async getAll() {
        return await this.gameTypeService.getAll();
    }

}
