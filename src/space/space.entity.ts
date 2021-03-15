import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Festival } from "../festival/festival.entity";
import { ReservationDetails } from "../reservationDetails/reservationDetails.entity";
import { SpaceDto } from "./space.dto";

@Entity("space")
export class Space {

  @PrimaryGeneratedColumn({ name: "id_space" })
  id: number;

  @Column({ name: "label_space" })
  label: string;

  @Column("double", { name: "table_price" })
  tablePrice: number;

  @Column("double", { name: "meter_price" })
  meterPrice: number;

  @Column({ name: "table_total_number" })
  tableTotal: number;

  @Column({ name: "table_remaining_number" })
  tableRemaining: number;

  @ManyToOne(() => Festival, festival => festival.spaces)
  @JoinColumn({ name: "id_festival" })
  festival: Festival;

  @OneToMany(() => ReservationDetails, reservationDetails => reservationDetails.space)
  reservationDetails: ReservationDetails[];

  static createFromDto(festival: Festival, spaceDto: SpaceDto) {
    const space: Space = new Space();

    space.label = spaceDto.label;
    space.tablePrice = spaceDto.tablePrice;
    space.meterPrice = spaceDto.meterPrice;
    space.tableTotal = spaceDto.tableTotal;
    space.tableRemaining = spaceDto.tableTotal;
    space.festival = festival;

    return space;
  }
}
