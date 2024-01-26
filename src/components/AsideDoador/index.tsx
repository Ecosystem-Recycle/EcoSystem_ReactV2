
import './style.css'

import { Link } from 'react-router-dom';

function AsideDoador(props: any) {
    return (
        <aside id='AsideDoador'>
            <ul>
                <li className={props.idSeletor == 1 ? "contorno" : ""}>
                    <Link to="/querodoarpt1">quero doar</Link>
                </li>
                <li className={props.idSeletor == 2 ? "contorno" : ""}>
                    <Link to="/minhasdoacoes">minhas publicações</Link>
                </li>
                <li className={props.idSeletor == 3 ? "contorno" : ""}>
                    <Link to="/editarperfildoador">editar perfil</Link>
                </li>
            </ul>
        </aside>

    )
}

export default AsideDoador;