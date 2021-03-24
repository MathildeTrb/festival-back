import {Injectable} from "@nestjs/common";
import {gcs} from "../utils/gcs";
import {Bucket, File} from "@google-cloud/storage";

@Injectable()
export class PhotoService {

    async uploadFile(file: any): Promise<string> {

        const bucket: Bucket = gcs.bucket("photo_element_festival");

        const timestamp: number = Date.now();

        const filename: string = `${timestamp}_${file.originalname}`

        const fileToUpload: File = bucket.file(filename);

        await fileToUpload.save(file.buffer);

        return `${process.env.BUCKET_URL}/${filename}`
    }
}
