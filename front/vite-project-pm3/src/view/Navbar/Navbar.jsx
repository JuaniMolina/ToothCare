import React, { useEffect } from "react";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import logo from '../../helpers/images/logo.png';
import { useSelector } from "react-redux";
import {  logOutUser } from '../../redux/reduceR';
import { useDispatch } from "react-redux";

const Navbar = ({}) => {

const user = useSelector((state) => state.userActive);
const dispatch = useDispatch();


    return(
        <div className={styles.navbar}>

            <div className={styles.nav_navigate}>
                <div className={styles.nav_logo}>
                    <img src={logo} alt="foto" />
                    <div className={styles.nav_items}><p>Tooth Care</p></div>
                </div>
                <div className={styles.nav_links}>
                    <button className={styles.nav_items}><Link to='/' >HOME</Link></button>
                    { user.name && <button className={styles.nav_items}><Link to='/appointments' >MIS TURNOS</Link></button>
                    }
                    <button className={styles.nav_items}><Link to='' >ABOUT</Link></button>
                    <button className={styles.nav_items}><Link to='/contact' >CONTACT</Link></button>
                </div>
            </div>

            <div className={styles.nav_logreg}>
                <span>_______________________________________________</span>
                
                {
                    !user.name ? 
                    <div>
                        <button className={styles.nav_items}><Link to='/user/login' >LOGIN</Link></button>
                        <button className={styles.nav_items}><Link to='/user/register' >REGISTER</Link></button>
                    </div>
                    :
                    
                    <button className={styles.nav_items} onClick={()=>{dispatch(logOutUser())}}><Link to='/'  >LOGOUT</Link></button>  
                }
            </div>

        </div>
    )
}

export default Navbar;