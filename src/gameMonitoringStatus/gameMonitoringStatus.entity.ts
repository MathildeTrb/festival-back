import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {GameMonitoring} from "../gameMonitoring/gameMonitoring.entity";

@Entity("game_monitoring_status")
export class GameMonitoringStatus {

    @PrimaryGeneratedColumn({name: "id_game_monitoring_status"})
    id: number;

    @Column({name: "label_game_monitoring_status"})
    label: string;

    @OneToMany(() => GameMonitoring, gameMonitoring => gameMonitoring.status)
    gameMonitorings: GameMonitoring[];
}
