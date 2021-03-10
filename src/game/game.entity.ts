import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Festival } from "../festival/festival.entity";
import { GameType } from "../game-type/game-type.entity";
import { Company } from "../company/company.entity";

@Entity("game")
export class Game {
  @PrimaryGeneratedColumn({ name: "id_game" })
  id: number;

  @Column({ name: "name_game" })
  name: string;

  @Column({ name: "minimum_number_player" })
  minNumberPlayer: number;

  @Column({ name: "maximum_number_player" })
  maxNumberPlayer: number;

  @Column({ name: "minimum_year_player" })
  minYearPlayer: number;

  @Column({ name: "duration_game" })
  duration: number;

  @Column({ name: "is_prototype" })
  isPrototype: boolean;

  @Column({ name: "is_deleted" })
  isDeleted: boolean;

  @ManyToOne(() => GameType, type => type.games)
  type: GameType;

  @ManyToOne(() => Company)
  editor: Company
}
