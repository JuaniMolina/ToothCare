import UserDto from "../dto/userDto";
import { newCredential } from "./credentialsService";
import { AppointmentModel, UserModel } from "../config/data-source";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";


//!CREAR UN NUEVO USUARIO en db
export const createUserService = async(userData:UserDto): Promise<User> => {
    const newUser: User = await UserModel.create(userData);//crear el registro

    const credential: Credential = await newCredential({username: userData.username, password: userData.password})
    
    newUser.credentialsId = credential;
    UserModel.save(newUser)

    return newUser
};

//!RETORNAR EL ARREGLO COMPLETO DE USUARIOS
export const getUsersService = async(): Promise<User[]> => {
    const users = await UserModel.find({
        relations:{
            appoitments: true
        }
    })

    if(users.length === 0) throw Error("No se ecnontraron usuarios")
    
    return users;
};

//!RETORNAR USUARIO POR ID
export const getUserByIdService = async(id: number): Promise<User | null> => {
    const user: User | null= await UserModel.findOne({
        relations:{
            appoitments: true
        },
        where:{
            id:id
        }
    });
    if(!user) throw Error("Usuario no encontrado")

    return user;
};

export const deleteUserService = async(id:number): Promise<void> => {
    
};

export const FindUserByCredentialId = async (credencialId: number): Promise<User | null> => {
    const user: User | null = await UserModel.findOneBy({
        credentialsId: {id: credencialId}
    })
    if(!user) throw Error("Usuario inexistente")
    return user
}