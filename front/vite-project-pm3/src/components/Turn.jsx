import React from "react";
import styles from "./Turn.module.css";
import styles2 from './../view/TurnForm/TurnForm.module.css'
import axios from "axios";
import { useDispatch } from "react-redux";
import { cancelAppointment } from "../redux/reduceR";
import Swal from "sweetalert2";
import { validarFechaDistinta } from "../helpers/TurnForm";


const Turn = ({turn}) => {
    const {date, time, status, id, description} = turn;
    const dispatch = useDispatch();

    const cancelAppointments = async () => {
        try {
            const res = await axios.put(`http://localhost:3000/appointments/cancel/${id}`)
            dispatch(cancelAppointment(id))
        } catch (error) {
            console.log(error);
        }
    }


    const handlerCancel = () => {
        if(validarFechaDistinta(date)){
            Swal.fire({
                icon:"question",
                title:`Estas seguro de Cancelar`,
                text: 'Una vez confirmado  no se puede revertir',
                showCancelButton:true,
                confirmButtonText:"CONFIRMAR",
                cancelButtonText: "CANCELAR" ,
                confirmButtonColor: "#1b2b5a",
                cancelButtonColor:"#E90808"
            })
            .then((result)=>{
                    if(result.isConfirmed){
                        cancelAppointments()
                    } 
                    else if(result.dismiss) {
                        return
                    }   
                }
            )
        }else{
            Swal.fire({
                icon:'info',
                title:"No puedes cancelar el truno",
                text:"Debes cancelar con 24hs de antelacion"
            })
        }
        
        
    }
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.turn_container}>
                    <div className={styles.turn_item}>{description}</div>
                    <div className={styles.turn_item}>Fecha:   {date}</div>
                    <div className={styles.turn_item}>{time} hs</div>
                    <div className={styles.turn_item} style={{color: status === 'active' ? "green" : "red"}}>{status}</div>
                    
                    <button disabled={status === 'cancelled'} className={status === 'active' ? styles2.buttonSub : styles.cancelled } onClick={handlerCancel}>Cancelar Turno</button>
                    
                </div>
            </div>
        </>
    )
}

export default Turn;