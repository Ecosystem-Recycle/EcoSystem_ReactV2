import './style.css'
import { Link } from "react-router-dom";


export default function Aside(props:any) {
    return (
        <aside id='AsideColetor'>
            <ul>
                <li className = { props.idSeletor== 1  ?  "contorno" : "" }>
                    <Link to="/buscarpublicacoes">Buscar por publicações</Link>
                </li>
                <li className = { props.idSeletor== 2  ?  "contorno" : "" }>
                    <Link to="/coletasagendadas">coletas agendadas</Link>
                </li>
                <li className = { props.idSeletor== 3  ?  "contorno" : "" }>
                    <Link to="/editarperfilcoletor">editar perfil</Link>
                </li>
            </ul>
        </aside>

    )
}

