import {GameMonitoring} from "../gameMonitoring/gameMonitoring.entity";
import { ReservationDetailsDto } from "../reservationDetails/reservationDetails.dto";
import { ExhibitorMonitoringDto } from "../exhibitorMonitoring/exhibitorMonitoring.dto";

export class ReservationDto{
    id?:number;
    needVolunteer: boolean;
    willCome: boolean;
    discount: number;
    mailingDate: Date;
    paymentDate: Date;
    reservationDetails: ReservationDetailsDto[];
    exhibitorMonitoring: ExhibitorMonitoringDto;
    gameMonitorings: GameMonitoring[];
}
