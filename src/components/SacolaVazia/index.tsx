import './style.css'
import imgCadeado from '../../assets/img/cadeado.png'

export default function SacolaVazia() {
    return (
        <>
            <div className="Conteudo_Sacola">
                <span>Você Não Possui Publicações Finalizadas no Sistema</span>
            </div>
            <div className="imgCadeado">
                <img src={imgCadeado} alt="Imagem de cadeado" />
            </div>
        </>

    )
}

