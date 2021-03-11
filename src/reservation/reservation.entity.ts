import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("reservation")
export class Reservation {

    @PrimaryGeneratedColumn({name: "id_reservation"})
    id: number;

    @Column({name: "need_volunteer"})
    needVolunteer: boolean

    @Column({name: "will_come"})
    willCome: boolean

    @Column("text", {name: "comment_reservation"})
    comment: string
}
