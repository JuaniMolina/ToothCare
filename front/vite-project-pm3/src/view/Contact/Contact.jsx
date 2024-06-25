import styles from './Contact.module.css'
import styles2 from '../Home/Home.module.css'

const Contact = () => {
    return(
        <div className={styles.container}>
            <div className={styles2.bg_r}></div>
            <div className={styles.datos}>
                <div>
                    <div>
                        <h1>Contacto</h1>
                    </div>
                </div>

                <div>
                    <p><strong>Dias y Horarios de atencion:</strong> Lun a Vie - 9:00 a 18:00</p>
                    <p> <strong>Email:</strong>  <a href="">toothcare@gmail.com</a></p>
                    <p> <strong>Telefono:</strong>  +54 9 1195583210</p>
                    <p><strong>Dirección:</strong> Av.SiempreViva 742 - Lanus Oeste</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;