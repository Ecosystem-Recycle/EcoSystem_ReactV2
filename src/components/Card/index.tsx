import './style.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../utils/api';

import ico_eye from '../../assets/img/ico_eye.svg'
import ico_delete from '../../assets/img/ico_delete.svg'

import ModalConfirmarColeta from '../ModalConfirmarColeta';


export default function Card(props: any) {
    const [abrirModal, setAbrirModal] = useState<boolean>(false);
    const navigate = useNavigate()


    function FormataStringData(data:string):string {
        //formata a data do MYSQL -> (1900-12-25) para (25/12/1900)
        let ano  = data.split("-")[0];
        let mes  = data.split("-")[1];
        let dia  = data.split("-")[2];
      
        return dia + '/' + ("0"+mes).slice(-2) + '/' + ("0"+ano).slice(-2);
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    }

    function visualizarColeta(){
        setAbrirModal(!abrirModal);
    }
    
    function deletarColeta(){
        
        
            Swal.fire({
                title: "Atenção!",
                showDenyButton: true,
                denyButtonText: `Não Excluir`,
                showCancelButton: true,
                confirmButtonText: "Excluir",
                text: "Deseja Excluir Essa Coleta?", 
                icon:"warning",
                confirmButtonColor: "#045328",
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    atualizarStatusAnuncio();
                    api.delete("coleta/" + props.idColeta).then( (responseStatus:any) => {
                        Swal.fire("Sucesso!", "Coleta Excluida com sucesso", "success");
                        setTimeout(() => {
                            navigate(0);
                        }, 3000);
                        
                    }).catch( (error:any) => {
                        console.log(error)
                    })
                  
                } else if (result.isDenied) {
                  Swal.fire("Coleta Não foi Excluida", "", "info");
                }
              });;
              
        
    }

    function atualizarStatusAnuncio(){
        const atualizarStatus: { tipo_status: string } = { tipo_status: "Aguardando Agendamento" }
        api.patch("anuncio/status/" + props.idAnuncio, atualizarStatus).then( (responseStatus:any) => {
       }).catch( (error:any) => {
           console.log(error)
       })
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
                    <p>Quantidade: { props.conteudoCardQuantidade }</p>
                    <p>Responsável: { props.conteudoCardOwner }</p>

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

                        <button 
                            type="button"
                            onClick={ () => visualizarColeta() }
                        >
                            <img
                                src={ico_eye}
                                alt="Icone de visualizar"
                            />
                        </button>

                        
                        <button 
                            type="button"
                            onClick={ () => deletarColeta() }
                        >
                            <img
                                src={ico_delete}
                                alt="Icone de deletar"
                            />
                        </button>
                    </div>
                </div>
            </div>
            {
                abrirModal 
                
                &&
            
                <ModalConfirmarColeta 
                    isOpen={ abrirModal } 
                    idAnuncio={ props.idAnuncio }
                    idColeta={ props.idColeta }
                    imagemColeta={ props.imgBackground }
                    index={ props.index }
                    tituloModal={ props.tituloCard }
                    data={ props.conteudoCardData }
                    quantidade={ props.conteudoCardQuantidade }
                    responsavel={ props.conteudoCardOwner }
                    descricoes={ props.descricoes }
                    codTelefone={ props.codTelefone }
                    disponibilidade={ props.disponibilidade }
                    dataRetirada={ props.dataRetirada }
                    periodo={ props.periodo }
                    rua={ props.rua }
                    numero={ props.numero }
                    cidade={ props.cidade }
                    estado={ props.estado }
                    cep={ props.cep }
                    onClose={ () => visualizarColeta() }
                >
                    
                </ModalConfirmarColeta>
            }
        </div>
    )

}