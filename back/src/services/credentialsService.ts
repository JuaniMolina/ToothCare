import ICredential from "../interfaces/ICredential";
import CredentialDto from "../dto/credentialDto";
import { CredentialModel } from "../config/data-source";
import { Credential } from "../entities/Credential";



export const newCredential = async(credentialData: CredentialDto): Promise<Credential> => {
    const credential = await CredentialModel.create(credentialData)
    CredentialModel.save(credential)
    return credential
}

export const validateCredentials = async(credentialData: Credential): Promise<Credential> => {
    const credential: Credential | null = await CredentialModel.findOneBy({
        username: credentialData.username
    })
    if(!credential) throw Error("El usuario no existe")

    if(credentialData.password != credential.password) throw Error("La contraseña es incorrecta")
    
    return credential
}

