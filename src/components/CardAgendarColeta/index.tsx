// import { useState } from 'react'
import './style.css'
import image from "../../assets/img/image 12.png"

export default function CardAgendarColeta(props:any) {
    function FormataStringData(data:string):string {
        //formata a data do MYSQL -> (1900-12-25) para (25/12/1900)
        let ano  = data.split("-")[0];
        let mes  = data.split("-")[1];
        let dia  = data.split("-")[2];
      
        return dia + '/' + ("0"+mes).slice(-2) + '/' + ("0"+ano).slice(-2);
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    }
    return (
        <div className="card" id='cardAgendarColeta'>
            <div className="cardEsquerda">
                <h2>{ props.titulo }</h2>
                <img src={ "http://localhost:8090/img/" + props.imagem  } alt="Imagem da publicação" />
            </div>
            <div className="cardDireita">
                <div className="cardDireitaConteudo">
                    <h2>Dados da Retirada</h2>
                    <p><b>Data de publicação:</b> {props.dataPublicacao ? FormataStringData(props.dataPublicacao) : "dd/mm/aaaa"}</p>
                    <p><b>Total de iten(s):</b> { props.quantidadeItem ? props.quantidadeItem : "N" }</p>
                    <div>
                        <p><b>Descrição:</b></p>
                        <div>
                            { 
                                props.descricoes.map((descricao: any, index: number) => {
                                    return <p key={ index }>{ descricao.quantidade+"x "+ descricao.nome }</p>
                                })
                            }
                        </div>
                    </div>

                    <p>
                        <b>Localização:</b> { props.logradouro }, { props.numero } - { props.cidade } - { props.estado }
                    </p>
                        <p>
                            <b>CEP:</b> { props.cep }
                        </p>
                    <p>
                        <b>Disponibilidade para agendamento: </b>{ props.disponibilidade }
                    </p>

                    <p>
                        <b>Período:</b> { props.periodo }
                    </p>
                </div>
            </div>
        </div>
    )
} 