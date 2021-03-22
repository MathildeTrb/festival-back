import {ExhibitorMonitoring} from "../exhibitorMonitoring/exhibitorMonitoring.entity";

export class ExhibitorMonitoringStatusDto {
    id?: number;
    label: string;
    exhibitorMonitorings: ExhibitorMonitoring[]
}
