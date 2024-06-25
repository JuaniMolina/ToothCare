import { BiLogoGit } from "react-icons/bi";
import Login from "../view/Login/Login";

const validateRegister = (datos) => {
    const errors = {}
    const { email, name} = datos;
    
    const regExNombre = /^[a-zA-Z\s]+$/;
    const regExMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    

    if(!regExNombre.test(name) ){
        errors.name = "Nombre invalido.";
    }
    if(name.length == 0){
        errors.name = '';
    }
    if(!regExMail.test(email)){
        errors.email = "Email invalido.";
    }else{
        errors.email = "";
    }
    if(email.length == 0){ 
        errors.email = '';
    }
    

    return errors

}

export default validateRegister;