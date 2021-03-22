import {Controller, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {PhotoService} from "./photo.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller("photos")
export class PhotoController {

    constructor(private readonly photoService: PhotoService) {}

    @Post()
    @UseInterceptors(FileInterceptor("file"))
    async upload(@UploadedFile() file) {
        return await this.photoService.uploadFile(file);
    }


}
