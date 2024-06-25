import { useState, useEffect } from "react";
import Turn from "../../components/Turn.jsx";
import styles from "../../components/Turn.module.css";
import styles2 from '../TurnForm/TurnForm.module.css';
import {bg_r} from "../Home/Home.module.css"
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAppointments } from "../../redux/reduceR.js";




const MisTurnos = () => {
    const user = useSelector((state) =>  state.userActive);
    const appointments = useSelector((state) => state.userAppointments);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(appointments.length);

    useEffect(()=>{
        !user.name && navigate("/user/login");
    },[])

    useEffect(()=> {
        async function getTurns(){
        try {
            const res = await axios.get(`http://localhost:3000/users/${user.id}`)
            dispatch(setAppointments(res.data.appoitments))
        } catch (error) {

        }
            
        }
        getTurns();
    }, [])
    

    


    return (
        <div className={styles.contenedor_principal}>
            <div className={bg_r}></div>
            <div className={styles.contenedor_turnos}>

            <div className={styles.title}>
                <h1>{user.name}</h1>
                <button className={styles2.buttonSub}><Link to='/turn/schedule'>NUEVO TURNO</Link></button>
            </div>

                <div className={styles.centrar_contenedor}>
                    { !appointments.length == 0 ? 
                    ( appointments.map((turn)=> <Turn key={turn.id}  turn={turn}/> ))
                    :
                    (<div>
                        <p>No tiene Turnos programados.</p>
                    </div>)
                    }
                </div>
            </div>
        </ div>
    )
}

export default MisTurnos;