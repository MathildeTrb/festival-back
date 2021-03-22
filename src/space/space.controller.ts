import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import {SpaceService} from "./space.service";

@Controller('spaces')
export class SpaceController {

    constructor(private readonly spaceService: SpaceService) {}

    @Get(":id")
    async getAll(@Param("id", ParseIntPipe) id: number) {
        return await this.spaceService.getAll(id);
    }

    /*
    @Post()
    async create(@Body("space") space: SpaceDto){
        return this.spaceService.create(space)
    }*/
}
