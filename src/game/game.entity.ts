import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {GameType} from "../gameType/gameType.entity";
import {Company} from "../company/company.entity";
import {GameDto} from "./game.dto";

@Entity("game")
export class Game {

    @PrimaryGeneratedColumn({name: "id_game"})
    id: number;

    @Column({name: "name_game"})
    name: string;

    @Column({name: "minimum_number_player"})
    minNumberPlayer: number;

    @Column({name: "maximum_number_player"})
    maxNumberPlayer: number;

    @Column({name: "minimum_year_player"})
    minYearPlayer: number;

    @Column({name: "duration_game"})
    duration: number;

    @Column({
        name: "is_prototype",
        default: false
    })
    isPrototype: boolean;

    @Column({
        name: "is_deleted",
        default: false
    })
    isDeleted: boolean;

    @ManyToOne(() => GameType, type => type.games)
    @JoinColumn({name: "id_game_type"})
    type: GameType | number;

    @Column("text", {
        name: "manual_game",
        nullable: true
    })
    manual: string

    @Column({
        name: "image_url_game",
        nullable: true
    })
    imageUrl: string

    @ManyToOne(() => Company)
    @JoinColumn({name: "id_editor"})
    editor: Company | number

    static createFromDto(gameDto: GameDto): Game {
        const game: Game = new Game();

        game.name = gameDto.name;
        game.minNumberPlayer = gameDto.minNumberPlayer;
        game.maxNumberPlayer = gameDto.maxNumberPlayer;
        game.duration = gameDto.duration;
        game.isPrototype = gameDto.isPrototype;
        game.type = gameDto.type;
        game.manual = gameDto.manual;
        game.imageUrl = gameDto.imageUrl;
        game.editor = gameDto.editor;

        return game;
    }



}
