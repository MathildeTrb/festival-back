import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("monitoring_game_status")
export class MonitoringGameStatus {

    @PrimaryGeneratedColumn({name: "id_monitoring_game_status"})
    id: number

    @Column({name: "label_monitoring_game_status"})
    label: string


}
