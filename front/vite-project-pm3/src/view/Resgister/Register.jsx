import { BsPersonVcard } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { BiSolidUserDetail } from "react-icons/bi";
import { TbLock } from "react-icons/tb";
import { TbLockCheck } from "react-icons/tb";
import axios  from 'axios';
import { bg_r } from '../Home/Home.module.css'
import styles from './Register.module.css'
import { useEffect, useState } from "react";
import validateRegister from "../../helpers/validateRegister";
import Swal from  'sweetalert2';
import { formatedToday } from "../../helpers/TurnForm";
import { useNavigate } from "react-router-dom";


const Register = ()=>{
    const navigate = useNavigate();

    const initialState = {
        name: '',
        email: '',
        birthdate:'',
        nDni:'',
        username:'',
        password:''
    }

    const [datos, setDatos] = useState(initialState)

    const [pwdconfirmed, setPwd2] = useState({
        password2: ''
    })

    const [confirmed, setConfirmed] = useState(true);

    const [errors, setError] = useState(initialState)

    const handlerSubmit = async (event) => {
        event.preventDefault();

        if(!datos.name || !datos.email || !datos.birthdate || !datos.nDni || !datos.password || !datos.username){
            Swal.fire({
                icon:'error',
                title: 'Faltan Datos',
                text:'Revisa el formulario'
            })
            return
        }

        try {
            const res = await axios.post("http://localhost:3000/users/register",datos)
            Swal.fire({
                icon: 'success',
                title:  `Usuario creado correctamente`,
                text: `Bienvenido ${res.data.name}
                Logueate para continuar`
            })
            setDatos(initialState);
            navigate('/user/login')

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal'
            });
        }
    
    }

    const changeHandler = (event)=> {
        const {name, value} = event.target;
        setDatos({
            ...datos,
            [name]: value
        })
        console.log(datos);
    }

    useEffect(()=>{
        const errorReg = validateRegister(datos);
        setError({
            ...errors, ...errorReg
        })
    },[datos])

    const handleConfirmPass = (event) => {
        const pass2 = event.target.value;
        setPwd2({
        ...pwdconfirmed,  
        'password2':pass2 
        });

        setConfirmed(pass2 === datos.password);
    }

    
    
    return(
        <div className={styles.container}>
            <h1>REGISTER</h1>
            <div className={bg_r}></div>
            <form action="" className={styles.form} onSubmit={(event) => handlerSubmit(event)}>
                <div className={styles.input_container}>
                    <label htmlFor="">
                        <IoPersonSharp />
                    </label>
                    <input type="text" name="name" id="nombre" placeholder="Nombre" onChange={changeHandler} />
                </div>
                {errors.name && <span>{errors.name}</span>} 

                <div className={styles.input_container}>
                    <label htmlFor="">
                        <AiOutlineMail />
                    </label>
                    <input type="text" name="email" id="email" placeholder="Email" onChange={changeHandler}/>
                </div>
                {errors.email && <span> {errors.email} </span>} 

                <div className={styles.input_container}>
                    <label htmlFor="">
                        <BsCalendar2Date />
                    </label>
                    <input type="date" max ={formatedToday} name="birthdate" id="birthdate" placeholder="Fecha de nacimiento" onChange={changeHandler}/>
                </div>
                {errors.birthdate && <span> {errors.birthdate} </span>} 


                <div className={styles.input_container}>
                    <label htmlFor="">
                        <BiSolidUserDetail />
                    </label>
                    <input type="text" name="nDni" id="nDni" placeholder="DNI" onChange={changeHandler}/>
                </div>

                <div className={styles.input_container}>
                    <label htmlFor="">
                        <BsPersonVcard />
                    </label>
                    <input type="text" name="username" id="username" placeholder="Username" onChange={changeHandler} />
                </div>
                {errors.username && <span>{errors.username}</span>}
                <div className={styles.passwords}>
                    <div className={styles.input_container}>
                        <label htmlFor="">
                            <TbLock/>
                        </label>
                        <input type="password" name="password" id='password' placeholder="Password" onChange={changeHandler}/>
                    </div>

                    <div className={styles.input_container} style={{borderColor: confirmed ? "green" : "red"}}>
                        <label htmlFor="">
                            <TbLockCheck/>
                        </label>
                        <input type="password" name="password2" placeholder="Repetir Password" onChange={handleConfirmPass} />
                    </div>

                    {!confirmed ? <span> Las contraseñas deben coincidir </span> : <span> </span> } 

                </div>

                <button type="submit">Registrar</button>

            </form>
        </div>
    )
}

export default Register;