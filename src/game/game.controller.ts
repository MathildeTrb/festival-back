import {GameService} from "./game.service";
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UploadedFile,
    UseInterceptors
} from "@nestjs/common";
import {GameDto} from "./game.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller("games")
export class GameController {

    constructor(private readonly gameService: GameService) {}

    @Get()
    async getAll() {
        return await this.gameService.getAll();
    }

    @Post()
    async create(@Body("game") game: GameDto) {
        console.log(game)
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

    @Post("photo")
    @UseInterceptors(FileInterceptor("file"))
    async uploadFile(@UploadedFile() file) {
        return this.gameService.uploadFile(file);
    }

}
