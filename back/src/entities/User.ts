import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Appointment } from "./Appointment"
import { Credential } from "./Credential"

@Entity({
    name: "users"
})
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column({
        length:100,
        unique: true
    })
    email: string

    @Column({
        type: 'date'
    })
    birthdate: Date

    @Column({
    })
    nDni: number

    @OneToMany(() => Appointment, ((appointment) => appointment.user))
    appoitments: Appointment[]

    @OneToOne(()=>Credential)
    @JoinColumn()
    credentialsId : Credential
}