import {Injectable} from "@nestjs/common";
import {gcs} from "../utils/gcs";
import {Bucket, File} from "@google-cloud/storage";

@Injectable()
export class PhotoService {

    async uploadFile(file: any): Promise<string> {

        const bucket: Bucket = gcs.bucket("photo_element_festival");
        const fileToUpload: File = bucket.file(file.originalname);

        await fileToUpload.save(file.buffer);

        return `${process.env.BUCKET_URL}/${file.originalname}`
    }
}
