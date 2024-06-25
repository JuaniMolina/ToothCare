import { validarDiaLaborable } from "./TurnForm";

const validateTurn = (datos)=> {
    const errors = {};
    const { userId, time, date, description } = datos;

    if(!userId || !time || !date || !description){
        errors.description = "Faltan campos por llenar";
    }

    const diaSemanal = validarDiaLaborable(date)
    if(!diaSemanal){
        errors.date = "Ingrese un dia de Lunes a Viernes"
    }
    
    return errors;
}

export default validateTurn;