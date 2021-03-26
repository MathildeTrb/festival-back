import {Injectable} from "@nestjs/common";
import { Bucket, File, Storage } from "@google-cloud/storage";

@Injectable()
export class PhotoService {

    async uploadFile(file: any): Promise<string> {

        const gcs: Storage = new Storage({
            //keyFilename: path.join(__dirname, "../../storage.json"),
            projectId: "festival-jeu",
            credentials: JSON.parse(process.env.GCS_KEYFILE)
        })

        const bucket: Bucket = gcs.bucket("photo_element_festival");

        const timestamp: number = Date.now();

        const filename: string = `${timestamp}_${file.originalname}`

        const fileToUpload: File = bucket.file(filename);

        await fileToUpload.save(file.buffer);

        return `${process.env.BUCKET_URL}/${filename}`
    }
}
