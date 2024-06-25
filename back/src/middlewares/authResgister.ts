import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";

const authRegister = async(req: Request, res: Response, next: NextFunction)=> {
    const userData = req.body;

    if (!userData.name || !userData.email || !userData.birthdate || !userData.nDni) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
        return res.status(400).json({ message: "Formato de correo electrónico inválido" });
    }

    
    const dni = parseInt(userData.nDni);
    if (isNaN(dni) || userData.nDni.toString().length !== 8) {
        return res.status(400).json({ message: "El DNI debe contener exactamente 8 dígitos numéricos" });
    }

    
    next();
}

export default authRegister;