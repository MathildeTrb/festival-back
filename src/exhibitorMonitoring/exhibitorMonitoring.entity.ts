import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {Company} from "../company/company.entity";
import {Festival} from "../festival/festival.entity";
import {ExhibitorMonitoringStatus} from "../exhibitorMonitoringStatus/exhibitorMonitoringStatus.entity";
import {Reservation} from "../reservation/reservation.entity";

@Entity("exhibitor_monitoring")
export class ExhibitorMonitoring {

    @ManyToOne(() => Company, {primary: true})
    @JoinColumn({name: "id_exhibitor"})
    exhibitor: Company;

    @ManyToOne(() => Festival, {primary: true})
    @JoinColumn({name: "id_festival"})
    festival: Festival;

    @ManyToOne(() => ExhibitorMonitoringStatus)
    @JoinColumn({name: "id_exhibitor_monitoring_status"})
    @Column("int", {
        name: "id_exhibitor_monitoring_status",
        default: 1
    })
    status: ExhibitorMonitoringStatus;

    @ManyToOne(() => Reservation, reservation => reservation.exhibitorMonitoring)
    @JoinColumn({name: "id_reservation"})
    reservation: Reservation;

    @Column("date", {
        name: "date_contact_1",
        nullable: true
    })
    dateContact1: Date;

    @Column("date", {
        name: "date_contact_2",
        nullable: true
    })
    dateContact2: Date;

    @Column("date", {
        name: "date_contact_3",
        nullable: true
    })
    dateContact3: Date;
}


