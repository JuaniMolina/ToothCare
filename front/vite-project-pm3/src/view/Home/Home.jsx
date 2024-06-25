import { useEffect } from "react";
import styles from "../Home/Home.module.css"
import clinica_dental from "../../helpers/images/clinica_dental.png"
import corona from "../../helpers/images/corona.png"
import dentista from "../../helpers/images/dentista.png"
import instrumentos from "../../helpers/images/instrumentos.png"
import dental from "../../helpers/images/dental.png"

const Home = () =>{

    return(
        <div className={styles.contenedor_principal}>
            <div className={styles.bg_r}></div>
            <div className={styles.container}>
            <div className={styles.home}>
                <div className={styles.video_container}>

                    <video src="https://media.istockphoto.com/id/1328469425/es/v%C3%ADdeo/montaje-de-happy-smiling-many-people-close-up-concepto-de-personas-multi%C3%A9tnicas-y.mp4?s=mp4-640x640-is&k=20&c=Wk6y8Yp-U5CYO_zoqNW0SdVtkL-SM7GxjaXac-aTtpY=" autoPlay loop muted>
                    </video>

                </div> 
                <div className={styles.text_container}>
                    <p>TU SONRISA <br />HABLA DE VOS</p>
                    <span>_____________</span>
                </div>
            </div>

            <div className={styles.text_description}>
                <p>
                ¡Cuida de tu sonrisa con los mejores servicios dentales en nuestra clínica especializada en el cuidado dental! Sabemos lo importante que es mantener una buena higiene bucal para lucir una sonrisa radiante y saludable. Nuestro equipo de expertos en cuidado dental se dedica a ofrecerte los tratamientos más avanzados y personalizados para que puedas presumir de una dentadura impecable.
                <br /><br />
                En nuestra clínica, nos comprometemos a brindarte un servicio de calidad que te ayude a mantener tus dientes sanos y fuertes. ¡No esperes más y conviértete en el dueño de una sonrisa deslumbrante con nosotros! ¡Confía en nuestros profesionales para transformar tu cuidado dental y darle un giro positivo a tu salud bucal!
                </p>
            </div>

            <div className={styles.card_container}>
                <div className={styles.card_home}>
                    <div>
                        <img className={styles.card_img} src={instrumentos} alt="" />
                    </div>
                    <div className={styles.card_text}>
                        <p>Materiales biocompatibles de calidad superior. </p>
                        <p>Utilizamos resinas, cerámicas y aleaciones de última generación para restauraciones duraderas y estéticas.</p>
                    </div>
                </div>
                <div className={styles.card_home}>
                    <div>
                        <img className={styles.card_img} src={corona} alt="" />
                    </div>
                    <div className={styles.card_text}>
                        <p>Tecnología digital de impresión 3D para restauraciones personalizadas y ajustadas a la perfección en su boca.</p>
                        <p>Conservamos la mayor cantidad de estructura dental natural.</p>
                    </div>
                </div>
                
                <div className={styles.card_home}>
                    <div>
                        <img className={styles.card_img} src={dental} alt="" />
                    </div>
                    <div className={styles.card_text}>
                        <p>Soluciones integrales bajo un mismo techo. </p>
                        <p>Ofrecemos servicios completos desde ortodoncia y endodoncia hasta implantes dentales y cirugía oral.</p>
                    </div>
                </div>

                <div className={styles.card_home}>
                    <div>
                        <img className={styles.card_img} src={dentista} alt="" />
                    </div>
                    <div className={styles.card_text}>
                        <p>Especialistas certificados en diversas ramas. </p>
                        <p>Contamos con profesionales expertos en ortodoncia, periodoncia, implantología y más.</p>
                    </div>
                </div>

                <div className={styles.card_home}>
                    <div>
                        <img className={styles.card_img} src={clinica_dental} />
                        </div>
                    <div className={styles.card_text}>
                        <p>Compromiso con la educación contínua.</p>
                        <p> Nuestro equipo se mantiene actualizado en las últimas técnicas y avances odontológicos.</p>
                    </div>
                </div>
            </div>
            </ div>
        </div>
    )
}

export default Home;