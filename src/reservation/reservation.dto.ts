import {ReservationDetails} from "../reservationDetails/reservationDetails.entity";
import {ExhibitorMonitoring} from "../exhibitorMonitoring/exhibitorMonitoring.entity";
import {GameMonitoring} from "../gameMonitoring/gameMonitoring.entity";

export class ReservationDto{
    id?:number;
    needVolunteer: boolean;
    willCome: boolean;
    comment: string;
    mailingDate: Date;
    paymentDate: Date;
    reservationsDetails: ReservationDetails[];
    exhibitorMonitoring: ExhibitorMonitoring;
    gameMonitorings: GameMonitoring[];
}
