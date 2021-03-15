import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Game} from "../game/game.entity";
import {GameTypeDto} from "./gameType.dto";

@Entity('game_type')
export class GameType {

    @PrimaryGeneratedColumn({name: "id_game_type"})
    id: number;

    @Column({name: "label_game_type"})
    label: string;

    @OneToMany(() => Game, game => game.type)
    games: Game[];

    static createFromDto(gameTypeDto: GameTypeDto): GameType {
        const gameType: GameType = new GameType();

        gameType.label = gameTypeDto.label;

        return gameType;
    }
}
