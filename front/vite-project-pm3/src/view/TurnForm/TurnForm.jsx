import { useEffect, useState } from 'react';
import { FormatedTomorrow, Services } from '../../helpers/TurnForm'
import styles2 from '../Home/Home.module.css'
import styles from './TurnForm.module.css'
import { useSelector } from 'react-redux';
import validateTurn from '../../helpers/TurnValidate';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const TurnForm = () => {
    const user = useSelector((state) => state.userActive);
    const navigate = useNavigate();
    const initialData = {
        description:"",
        time: "",
        date: "",
        userId: ""
    }
    
    const [turnData, setTurnData] = useState(initialData);

    const [ errors, setErrors] = useState({
        description:"",
        time: "",
        date: "",
        userId: ""
    });

    useEffect(()=>{
        !user.name && navigate('/');
    },[])

    
    const changeHandler = (e)=> {
        const { name, value } = e.target;
        
        setTurnData({
            ...turnData, 
            [name]:value,
            userId: user.id
        })
        
    };

    useEffect(()=>{
        setErrors(validateTurn(turnData))
    },[turnData]);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/appointments/schedule", turnData);
            Swal.fire({
                icon: "success",
                title: `${turnData.description}`,
                text:  `Cita agendada correctamente
                        Dia: ${turnData.date} Hora: ${turnData.time}`
            })
            navigate('/appointments')
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error al crear el turno"
            })
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles2.bg_r}></div>
            <div>
                <h1>Nuevo turno</h1>
            </div>
            <br />
            <div className={styles.form_container}>
                <form className={styles.form} onSubmit={(e)=>submitHandler(e)}>
                    <div className={styles.inputs}>
                        <select name="description" id="Services" onChange={changeHandler}>
                            {
                                Services.map((service, index) => {
                                    return <option value={service} key={index}>{service}</option>
                                })
                            }
                        </select>
                    </div>
                    
                    <div className={styles.inputs}>
                        <label htmlFor="">Horario </label>
                        <input 
                            name='time'
                            type="time" 
                            min={"09:00"} 
                            max="18:00" 
                            step="1800" 
                            defaultValue="09:00" 
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    
                    <div className={styles.inputs}>
                        <label htmlFor="">Fecha </label>
                        <input 
                            name='date'
                            type="date" 
                            min={FormatedTomorrow}
                            onChange={changeHandler}
                            
                        />
                        
                    </div>

                    <button className={styles.buttonSub} disabled={ errors.description } type='submit'>AGENDAR</button>
                </form>
                {errors.description && <h2>Todos los campos son obligatorios</h2>}
                {errors.date && <p>{errors.date}</p>}
            </div>
                <button className={styles.buttonSub}><Link to='/appointments'>Volver</Link></button>
        </div>
    )
};


export default TurnForm; 