import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "appoinments"
})
export class Appointment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "date"
    })
    date: Date;
    
    @Column({
        type: "time"
    })
    time: number;

    @Column()
    description: string;

    @Column()
    userId: number;

    @Column({
        default: "active"
    })
    status: string;

    @ManyToOne(()=> User, (user)=> user.appoitments)
    user: User
}