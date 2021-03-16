import {GameType} from "../gameType/gameType.entity";
import {Company} from "../company/company.entity";

export class GameDto {

    id?:number;
    name: string;
    minNumberPlayer: number;
    maxNumberPlayer: number;
    duration: number;
    isPrototype: boolean;
    type: number;
    manual: string;
    imageUrl: string;
    editor: number
}
