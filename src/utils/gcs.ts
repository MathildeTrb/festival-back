import {Storage} from "@google-cloud/storage";
import * as path from "path";

export const gcs: Storage = new Storage({
    keyFilename: path.join(__dirname, "../../storage.json"),
    projectId: "festival-jeu",
    //credentials: JSON.parse(process.env.GCS_KEYFILE)
})
