import style from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div className={style.contenedor}>
            <div className={style.message}>
                <div className={style.title}>ERROR</div>
                <div className={style.number}>404</div>
                <div className={style.text}>PAGE NOT FOUND</div>
            </div>
            <button><Link to='/'>VOLVER</Link></button>
        </div>
    )
}

export default NotFound;