import axios from 'axios';
import  { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiLock } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import styles from './Login.module.css'
import styles2 from '../Home/Home.module.css'
import Swal from  'sweetalert2';
import validate from  "../../helpers/validate";
import { useDispatch } from 'react-redux'
import { addUserActive } from '../../redux/reduceR';


const Login = () => {
    const estadoInicial = {
        username: "",
        password: ""
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [datos, setDatos] = useState(estadoInicial);

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const submitHandler = async(e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post("http://localhost:3000/users/login", datos);
            Swal.fire({
                icon: "success",
                title: "Bienvenidx",
            })
            dispatch(addUserActive(res.data))
            console.log(res.data);
            navigate('/');
            setDatos(estadoInicial);
        } catch (error) {
            console.log( error);
            // Swal.fire({
            //     icon: "error",
            //     title: "Upps... parece que hubo un Error!",
            //     text: "Revisar usuario o contrasena"
            // });
        };
    };

    const changeHandler = (e) => {
        
        const { name, value } = e.target;
        console.log(name + ": " + value);
        setDatos({
            ...datos, 
            [name]: value
        })
        
        
        
        

        
    };

    useEffect(()=>{
        const logErrors = validate(datos);
        setErrors({ ...errors, ...logErrors });
    },[datos]);

    
        


    return(
        
        <div className={`${styles.container}`}> 

            <div className={styles2.bg_r}></div>

            <div>
                <h1>LOGIN</h1>
            </div>

            <form action="" className={styles.login_form} onSubmit={(e) => submitHandler(e)}>
                <div className={styles.form_placeholders}>
                    <label htmlFor="" className={styles.icon_label}>
                        <IoPersonSharp className={styles.icons} />
                    </label>
                    <input 
                        id='username'
                        type = "text" 
                        name = 'username'
                        placeholder='Username'
                        onChange = {changeHandler}
                    />
                </div>
                {
                    errors.email && <span>{errors.email}</span>
                }
                <div className={styles.form_placeholders}>
                    <label htmlFor="" className={styles.icon_label}>
                    <CiLock className={styles.icons} />
                    </label>
                    <input 
                        id='password' 
                        type = "password" 
                        name ='password'
                        placeholder='Password'
                        onChange = {changeHandler}
                        />
                </div>
                {
                    errors.password && <span>{errors.password}</span>
                }
                <button type='submit' >INGRESAR</button>
                <p>
                    <a href=""></a>
                </p>
            </form>

        </ div>
    )
}

export default Login;