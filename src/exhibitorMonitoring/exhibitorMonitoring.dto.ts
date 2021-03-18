import {Company} from "../company/company.entity";
import {Festival} from "../festival/festival.entity";
import {ExhibitorMonitoringStatus} from "../exhibitorMonitoringStatus/exhibitorMonitoringStatus.entity";
import {Reservation} from "../reservation/reservation.entity";

export class ExhibitorMonitoringDto{
    exhibitor : Company;
    festival : Festival;
    status : ExhibitorMonitoringStatus;
    reservation: Reservation;
    dateContact1 : Date;
    dateContact2 : Date;
    dateContact3 : Date;
}
