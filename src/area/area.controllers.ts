import {Body, Controller, Get, Post} from "@nestjs/common";
import {AreaService} from "./area.service";
import {AreaDto} from "./area.dto";

@Controller("areas")
export class AreaControllers{
    constructor(private readonly areaService: AreaService) {}

    @Post()
    async create(@Body("area") area: AreaDto){
        return await this.areaService.create(area)
    }

    @Get()
    async getAll(){
        return await this.areaService.getAll();
    }
}

