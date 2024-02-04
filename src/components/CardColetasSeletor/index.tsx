import './style.css'
import { Link } from 'react-router-dom'

export default function CardColetaSeletor(props:any){

    return(
        <div id='cardColetaSeletor'>
            <div className="links_pags">
                <Link to="/coletasagendadas" className={props.idSeletor== 1 ? "contornoUm" : "contornoBase1" }>coletas ativas</Link>

                <span>|</span>

                <Link to="/coletasfinalizadas" className={props.idSeletor== 2 ? "contornoDois" : "contornoBase2"} >coletas finalizadas</Link>

            </div>
        </div>
    )
}
