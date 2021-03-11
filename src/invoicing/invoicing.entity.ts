import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Reservation} from "../reservation/reservation.entity";

@Entity("invoicing")
export class Invoicing {

    @PrimaryGeneratedColumn({name: "id_invoicing"})
    id: number

    @Column("datetime", {name: "date_edit_invoicing"})
    dateEdit: Date

    @Column("datetime", {name: "date_payment_invoicing"})
    datePayment: Date

    @Column("double", {name: "amount_invoicing"})
    amount: number

    @Column("double", {name: "discount_invoicing"})
    discount: number

    @ManyToOne(() => Reservation)
    reservation: Reservation
}
