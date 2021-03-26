import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ExhibitorMonitoring} from "../exhibitorMonitoring/exhibitorMonitoring.entity";

@Entity("exhibitor_monitoring_status")
export class ExhibitorMonitoringStatus {

    @PrimaryGeneratedColumn({name: "id_exhibitor_monitoring_status"})
    id: number

    @Column({name: "label_exhibitor_monitoring_status"})
    label: string

    @Column({name: "trigger_reservation_exhibitor"})
    triggerReservation: boolean

    @OneToMany(() => ExhibitorMonitoring, exhibitorMonitoring => exhibitorMonitoring.status)
    exhibitorMonitorings: ExhibitorMonitoring[];
}
