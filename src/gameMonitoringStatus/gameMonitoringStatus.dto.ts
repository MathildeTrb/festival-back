import { GameMonitoring } from "../gameMonitoring/gameMonitoring.entity";

export class GameMonitoringStatusDto {
  id? : number;
  label: string;
  gameMonitorings: GameMonitoring[]
}
