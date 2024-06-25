import AppointmentDto from "../dto/appointmentDto";
import { AppointmentModel, UserModel } from "../config/data-source";
import { Appointment } from "../entities/Appointment";


export const getAppointmentsService = async(): Promise<Appointment[]> => {
    const appointments = await AppointmentModel.find()
    if(appointments.length === 0) throw Error("No se encontraron turnos")
    return appointments
}

export const getAppointmentByIdService = async(id:number): Promise< Appointment | null>=> {
    const appointment = await AppointmentModel.findOneBy({
        id
    })

    if(!appointment) throw Error("El turno es Inexistente")
    
    return appointment
}

export const createAppointmentService = async(appointment: AppointmentDto): Promise<Appointment> => {
    const newAppointment = await AppointmentModel.create(appointment);
    await AppointmentModel.save(newAppointment);
    
    const user = await UserModel.findOneBy({
        id: appointment.userId
    })

    if(!user) throw Error("Usuario no encontrado");
    
    newAppointment.user = user;
    AppointmentModel.save(newAppointment)

    return newAppointment
}

export const cancelAppointmentService = async(id: number): Promise< Appointment | null>=> {
    const appointment = await AppointmentModel.findOneBy({id})

    if(!appointment) throw Error("El turno es inexistente")
    
    appointment.status = "cancelled"
    AppointmentModel.save(appointment);
    
    return appointment
}