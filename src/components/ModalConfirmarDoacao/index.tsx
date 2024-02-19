
import './style.css'


import ico_fechar from '../../assets/img/exit.svg'
import { useEffect, useState } from 'react';
import api from '../../utils/api';

function ModalConfirmarDoacao(props:any) {

  const [coletaLista, setColetaLista] = useState<any>({});
  function FormataStringData(data:string):string {
        //formata a data do MYSQL -> (1900-12-25) para (25/12/1900)
        let ano  = data.split("-")[0];
        let mes  = data.split("-")[1];
        let dia  = data.split("-")[2];
      
        return dia + '/' + ("0"+mes).slice(-2) + '/' + ("0"+ano).slice(-2);
        // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }

  useEffect( () => {
      buscarPublicacoes()
      const focusTitle:any = document.getElementById('titulo');
      focusTitle.focus();
}, [] )

document.onkeydown = function(e) {
  if(e.key === 'Escape') {
    props.onClose();
  }
}

useEffect(() => {
    console.log(coletaLista)
  }, [coletaLista]); 

  function buscarPublicacoes(){
    //GET todos Anuncios
    api.get("/coleta").then((responseColetas: any)=>{          
            let teste:object = {}
            responseColetas.data.forEach((coleta:any) => {
                
                if((coleta.anuncio.id == props.idAnuncio) ){
                  teste = coleta
                  setColetaLista(teste)
                }
            });
            
        })
}


  if( props.isOpen ){
    return (
      <div id='mainModalConfirmarDoacao'>
        
        <div className="margem_Doacao" >
          <div className='fecharModal'>
            <button 
              type='button'
              onClick={ props.onClose }
              tabIndex={0}
            >
            <img
                src={ico_fechar}
                alt="Icone para fechar modal doação"
            />
            </button>
          </div> 
          <div className="Conteudo_Doacao">
            <div className="dados_doacao1">
              <div className="Title_Img_Donation">
                <h5
                  aria-label={'Modal visualizar dados coleta : Pressione Esc para fechar:' + props.tituloModal } 
                  id="titulo" 
                  tabIndex={0}
                >{ props.tituloModal }</h5>
                <img
                  src={"http://localhost:8090/img/" + props.imagemColeta}
                  alt={"Imagem "+ props.index +" da Galeria de fotos"}
                />
              </div>
              <div>
                <h4>Dados do Anúncio</h4>
                <p><b>Data de publicação:</b> { FormataStringData(props.data) }</p>
                <p><b>Quantidade:</b> { props.quantidade }</p>
                <p><b>Responsável:</b> {props.responsavel}</p>
                <div className="Descricaocards">
                        <p><b>Descrição:</b> <br /></p>
                        
                        <div>
                            { 
                                props.descricoes.map((descricao: any, index: number) => {
                                    return <p key={ index }> <b>{ descricao.quantidade}</b>{ "x "+ descricao.nome }</p>
                                })
                            } 
                        </div>
                    </div>
                <p>
                  <b>Localização:</b> { props.rua }, N° { props.numero } - { props.cidade } - { props.estado }
                </p>
                <p>
                  <b>CEP:</b> { props.cep }
                </p>
                <p>
                  <b>Disponibilidade:</b> { props.disponibilidade } - { props.periodo }
                </p>
              </div>
            </div>
            <div className="dados_horario">
              <h4>Status Atual do Anuncio</h4>
              <div>
                <h5> { props.status } </h5>
              </div>
            </div>
            {
              props.status == "Coleta Finalizada" || props.status == "Coleta Agendada" 
              ? <div className="dados_local">
                  <h4>Horario da retirada:</h4>
                  <p>
                    
                  </p>
                  <p>
                     <b>Data: </b>{ coletaLista.disponibilidade }
                  </p>
                  <p>
                     <b>Período: </b>{ props.periodo }
                  </p>
                </div>
              : <>
                  <div className="dados_local">
                    <h4>Localização</h4>
                    <p>
                        { props.rua }, N° { props.numero } - { props.cidade } - { props.estado }
                    </p>
                    <p>CEP: {props.cep ? props.cep : "12345-678"}</p>
                    </div>
                    <div className="dados_responsavel">
                    <h4>Responsável:</h4>
                    <p>{ props.responsavel }</p>
                  </div>
              </>
            }
            
          </div>
        </div>
      </div>
            
    )
  }else {
    return null;
  }

  
}

export default ModalConfirmarDoacao;