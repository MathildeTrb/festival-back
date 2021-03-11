import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "../game/game.entity";

@Entity('game_type')
export class GameType{
  @PrimaryGeneratedColumn({name: "id_game_type"})
  id: number

  @Column({name: "label_game_type"})
  label: string

  @OneToMany(() => Game, game => game.type)
  games: Game[]
}