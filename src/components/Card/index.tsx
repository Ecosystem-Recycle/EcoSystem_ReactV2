import './style.css'

import ico_edit from '../../assets/img/ico_edit.svg';
import ico_eye from '../../assets/img/ico_eye.svg'
import ico_delete from '../../assets/img/ico_delete.svg'
import { Link } from 'react-router-dom';

export default function Card(props: any) {
    function msgDeletarColeta() {
        alert('A doação foi cancelada! O doador irá ser notificado');
    };

    function FormataStringData(data:string):string {
        //formata a data do MYSQL -> (1900-12-25) para (25/12/1900)
        let ano  = data.split("-")[0];
        let mes  = data.split("-")[1];
        let dia  = data.split("-")[2];
      
        return dia + '/' + ("0"+mes).slice(-2) + '/' + ("0"+ano).slice(-2);
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    }

    return (
        <div id='CardColetaAtiva'>
        <div className="cards">
            <h4>{ props.tituloCard }</h4>
            <img
                src={"http://localhost:8090/img/" + props.imgBackground }
                alt={"Imagem "+ props.index +" da Galeria de fotos"} 
            />
            <div className="WrapperCard">
                <p>Data de publicação: { FormataStringData(props.conteudoCardData) } </p>
                <p>Quantidade: { props.conteudoCardQuantidade ? props.conteudoCardQuantidade : "x"}</p>
                <p>Responsável: {props.conteudoCardOwner ? props.conteudoCardOwner : "owner"}</p>

                <div className="Descricaocards">
                    <p>Descrição: </p>
                    <div>
                        { 
                            props.descricoes.map((descricao: any, index: number) => {
                                return <p key={ index }>{ descricao.quantidade+"x "+ descricao.nome }</p>
                            })
                        } 
                    </div>
                </div>
                <p>Localização: <strong>{props.cidade + "-" + props.estado}</strong></p>

                <div className="card_Status">
                    <div className={"circle_Status " + props.corStatus}></div>
                    <p>
                        <span>Status:</span> {props.status}
                    </p>
                </div>



                {/* Confirmar os direcionamentos abaixo e a forma de exibição */}

                <div className="iconesCards">
                    <Link to="/agendarcoleta">
                        <img src={ico_edit} alt="Icone de Editar" />
                    </Link>
                    <Link to="/agendarcoleta">
                        <img
                            src={ico_eye}
                            alt="Icone de visualizar"
                        />
                    </Link>
                    <a href="#" onClick= { msgDeletarColeta }>
                        <img
                            src= { ico_delete }
                            alt="Icone de Deletar"
                        />
                    </a>
                </div>
            </div>
        </div>
        </div>
    )

}