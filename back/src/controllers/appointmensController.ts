import { Request, Response } from "express";
import { getAppointmentByIdService, cancelAppointmentService, createAppointmentService, getAppointmentsService } from "../services/appointmentsService"; 
import { Appointment } from "../entities/Appointment";

export const getAppointments = async (req: Request, res: Response)=> {
    try {
        const appointments: Appointment[] = await getAppointmentsService();
        res.status(200).json(appointments);    
    } catch (error: any) {
        res.status(404).json({error: error.message});
    }
}

export const getAppointmentById = async(req: Request, res: Response)=>{
    try {
        const { id } = req.params;
        const appointment: Appointment | null = await getAppointmentByIdService(parseInt(id));
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
    
}

export const newAppointment = async (req: Request, res: Response)=>{
    try {
        const { date, time, userId, description } = req.body;
        const newAppointment = createAppointmentService({ date, time, userId, description });
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
    
}

export const cancelAppointment = async (req: Request, res: Response)=> {
    try {
        const { id } = req.params;
        await cancelAppointmentService(Number(id));
        res.status(200).json("Turno Cancelado Correctamente.");    
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}