import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import {SpaceService} from "./space.service";
import { SpaceDto } from "./space.dto";
import { Space } from "./space.entity";

@Controller('spaces')
export class SpaceController {

    constructor(private readonly spaceService: SpaceService) {}

    @Get(":id")
    async getAll(@Param("id", ParseIntPipe) id: number) {
        return await this.spaceService.getAll(id);
    }

    @Post()
    async create(@Body("space") space: SpaceDto){
        return this.spaceService.create(space)
    }

    @Put()
    async update(@Body("space") space: Space){
        return this.spaceService.update(space)
    }
}
