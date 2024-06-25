import { NextFunction, Request, Response } from "express";

export const authLogin = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Por favor, proporciona un nombre de usuario y una contraseña" });
    }

    next();
};

export default authLogin;