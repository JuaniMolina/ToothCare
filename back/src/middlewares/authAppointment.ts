import { Request, Response, NextFunction } from 'express';

const authAppointments = (req: Request, res: Response, next: NextFunction) => {
    const { description, time, date, userId } = req.body;

    if (!description || !time || !date || !userId) {
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    next();
};

export default authAppointments;
