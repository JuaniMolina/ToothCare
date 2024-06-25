import styles from './Footer.module.css'
import logo from'../../helpers/images/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";



const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.links}>
                    <div>
                        <ul>
                            <h5>links</h5>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                        
                    <div>
                        <ul>
                            <h5>links</h5>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h5>links</h5>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div  className={styles.contacts}>
                    <div className={styles.logo_container}>
                        <img src={logo} alt="" />
                        <p>ToothCare</p>
                    </div>

                    <div>
                        <p>Todo sobre tu Sonrisa</p>
                    </div>

                    <div className={styles.social_icons}>
                        <ul>
                            <li><FaInstagram/></li>
                            <li><FaFacebook/></li>
                            <li><FaTwitter/></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className={styles.line}>
                <hr  />
            </div>
            <div className={styles.lastInfo}>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                <div>©2024 ToothCare. Todos los derechos Reservados</div>
            </div>
        </div>
    )
}

export default Footer;