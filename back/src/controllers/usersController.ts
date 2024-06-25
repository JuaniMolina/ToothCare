import { Request, Response } from "express";
import { getUsersService, getUserByIdService, createUserService, FindUserByCredentialId } from "../services/usersService";
import { User } from "../entities/User";
import { validateCredentials } from "../services/credentialsService";
import UserDto from "../dto/userDto";
import { secureHeapUsed } from "crypto";

export const getUsers = async(req: Request, res:Response) => {
    try {
        const users: User[] = await getUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({error: (error as Error).message})
    }
    
};

export const getUserById = async (req: Request, res: Response)=> {
    try {
        const { id } = req.params;
        const user: User | null= await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({error: (error as Error).message});
    }
}

export const userLogin = async (req: Request, res: Response)=> {
    try {
        const loginData = req.body;
        const credential = await validateCredentials(loginData)
        const user: User | null = await FindUserByCredentialId(credential.id)
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
}

export const Register =  async (req: Request, res:Response) => {
    try {
        const user: UserDto = req.body
        const { name, email, birthdate, nDni} = await createUserService(user)
        const secureUser = { name, email, birthdate, nDni}
        res.status(201).json(secureUser)
    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
}