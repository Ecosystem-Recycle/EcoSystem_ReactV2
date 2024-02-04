import './style.css'
import ico_eye from '../../assets/img/ico_eye.svg'
import ico_delete from '../../assets/img/ico_delete.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ModalConfirmarDoacao from '../ModalConfirmarDoacao';
import Swal from 'sweetalert2';
import api from '../../utils/api';

function CardDoador(props:any) {

    const [abrirModal, setAbrirModal] = useState<boolean>(false);
    const navigate = useNavigate()
    
    function visualizarAnuncio(){
        setAbrirModal(!abrirModal);
    }

    function deletarAnuncio(){
        let textoPergunta:string = "";
        if(props.status == "Coleta Agendada"){
                textoPergunta = "Você possui uma coleta agendada para este anúncio, deseja realmente Exclui-lo???";
        }else{
            textoPergunta = "Tem certeza que deseja excluir esse anúncio";
        }   
        Swal.fire({
            title: "Atenção!",
            showDenyButton: true,
            denyButtonText: `Não Excluir`,
            showCancelButton: true,
            confirmButtonText: "Excluir",
            text: textoPergunta, 
            icon:"warning",
            confirmButtonColor: "#045328",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // deletarProdutosAnuncio();
                api.delete("anuncio/" + props.idAnuncio).then( (responseStatus:any) => {
                    Swal.fire("Sucesso!", "Anuncio Excluido com sucesso", "success");
                    setTimeout(() => {
                        navigate(0);
                    }, 3000);
                    
                }).catch( (error:any) => {
                    console.log(error)
                })
              
            } else if (result.isDenied) {
              Swal.fire("Este anuncio não foi excluido", "", "info");
            }
          });;
          
    
}

// function deletarProdutosAnuncio() {
//     api.get("/produto").then((resListaProduto: any)=>{
//         let listaProdutos:any = []
//         listaProdutos = resListaProduto.data
//         listaProdutos.forEach((produto :any) => {
//             if(produto.anuncio.id == props.idAnuncio){
//                 api.delete("produto/" + produto.id).then( (responseStatus:any) => {
                    
//                 }).catch( (error:any) => {
//                     console.log(error)
//                 })
//             }
//         });

        
//     })
    
// }

    function FormataStringData(data:string):string {
        //formata a data do MYSQL -> (1900-12-25) para (25/12/1900)
        let ano  = data.split("-")[0];
        let mes  = data.split("-")[1];
        let dia  = data.split("-")[2];
      
        return dia + '/' + ("0"+mes).slice(-2) + '/' + ("0"+ano).slice(-2);
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
    }

    return (
        <>
            <div id='imgDoador'>
                <h4>{ props.title }</h4>
            
            
                <img className="fotoAnuncio"
                    src={"http://localhost:8090/img/" + props.imagem }
                    alt={"Imagem "+ props.index +" da Galeria de fotos"}
                />
            </div>
            <div id='cardDoador'>
            <div className="WrapperCard">
                <p><span>Data de publicação:</span> { FormataStringData(props.dataPubliq) }</p>
                <p><span>Quantidade de iten(s):</span> {props.totalItens}</p>
                <div className="Descriocaocards">
                    <p><span>Descrição:</span></p>
                    <div>
                            { 
                                props.descricoes.map((descricao: any, index: number) => {
                                    return <p key={ index }>{ descricao.quantidade+"x "+ descricao.nome }</p>
                                })
                            } 
                    </div>
                </div>
                <div className="card_Status">
                    <div className={"circle_Status " + props.corStatus}></div>
                    <p>
                        <span>Status:</span> {props.status}
                    </p>
                </div>
                <div className="iconesCards">

                        <button 
                            type="button"
                            onClick={ () => visualizarAnuncio() }
                        >
                            <img
                                src={ico_eye}
                                alt="Icone de visualizar"
                            />
                        </button>

                        {   props.status == "Coleta Finalizada" ?
                            <></>
                            : <button 
                                type="button"
                                onClick={ () => deletarAnuncio() }
                            >
                                <img
                                    src={ico_delete}
                                    alt="Icone de deletar"
                                />
                            </button>
                        }
                        
                    </div>
            </div>
            {
                abrirModal 
                
                &&
            
                <ModalConfirmarDoacao 
                    isOpen={ abrirModal } 
                    status={ props.status }
                    idAnuncio={ props.idAnuncio }
                    imagemColeta={ props.imagem }
                    index={ props.index }
                    tituloModal={ props.title }
                    data={ props.dataPubliq }
                    quantidade={ props.totalItens }
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
                    onClose={ () => visualizarAnuncio() }
                />
            }
        </div>
        </>
    )
}

export default CardDoador;