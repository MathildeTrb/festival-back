import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {Company} from "../company/company.entity";
import {Festival} from "../festival/festival.entity";
import {ExhibitorMonitoringStatus} from "../exhibitorMonitoringStatus/exhibitorMonitoringStatus.entity";
import {Reservation} from "../reservation/reservation.entity";

@Entity("exhibitor_monitoring")
export class ExhibitorMonitoring {

    @ManyToOne(() => Company)
    @PrimaryColumn("int", {name: "id_exhibitor"})
    exhibitor: Company;

    @ManyToOne(() => Festival)
    @PrimaryColumn("int", {name: "id_festival"})
    festival: Festival;

    @ManyToOne(() => ExhibitorMonitoringStatus)
    @Column("int", {name: "id_exhibitor_monitoring_status"})
    status: ExhibitorMonitoringStatus;

    @ManyToOne(() => Reservation)
    reservation: Reservation;

    @Column("datetime", {name: "date_contact_1"})
    dateContact1: Date;

    @Column("datetime", {name: "date_contact_2"})
    dateContact2: Date;

    @Column("datetime", {name: "date_contact_3"})
    dateContact3: Date;
}
