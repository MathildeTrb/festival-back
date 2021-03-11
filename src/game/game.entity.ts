import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {GameType} from "../gameType/gameType.entity";
import {Company} from "../company/company.entity";

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
    @Column("int", {name: "id_game_type"})
    type: GameType;

    @Column("text", {name: "manual_game"})
    manual: string

    @Column({name: "image_url_game"})
    imageUrl: string

    @ManyToOne(() => Company)
    @Column("int", {name: "id_editor"})
    editor: Company
}
