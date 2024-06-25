import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { DB_NAME, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD } from "./envs"
import { Appointment } from "../entities/Appointment"
import { Credential } from "../entities/Credential"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    // dropSchema: true,
    synchronize: true,
    logging: false, //ver documentacion
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const AppointmentModel = AppDataSource.getRepository(Appointment)
export const CredentialModel = AppDataSource.getRepository(Credential)