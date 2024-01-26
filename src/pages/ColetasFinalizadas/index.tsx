import './style.css'

import { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import api from '../../utils/api'

import Aside from "../../components/Aside"
import CardFinalizada from '../../components/CardFinalizados'
import CardColetaSeletor from '../../components/CardColetasSeletor';
import Card from '../../components/Card'
import SacolaVazia from '../../components/SacolaVazia'

function ColetasFinalizadas() {

    const [userId] = useState<any>(secureLocalStorage.getItem("userId"));
    const [produtoLista, setProdutoLista] = useState<any[]>([]);
    const [coletaLista, setColetaLista] = useState<any[]>([]);


    useEffect( () => {
        document.title = "Coletas Agendadas - Ecosystem e Recycle"
         if(produtoLista.length==0){
            carregarProdutos()

         }
        if(coletaLista.length==0){
            buscarPublicacoes()

        }
    }, [] )
    
    useEffect(() => {
      }, [coletaLista]); 


      function carregarProdutos(){
        api.get("/produto").then((resListaProduto: any)=>{
            let listaProdutos:any = []
            listaProdutos = resListaProduto.data
            setProdutoLista(listaProdutos);
        })
    }

    function buscarPublicacoes(){
        let dadosAnuncio:any = []
        //GET todos Anuncios
        api.get("/coleta").then((responseColetas: any)=>{          
                //pra cada anuncio total obtido
                responseColetas.data.forEach((coleta:any) => {
                    //Verifica se ID do Anuncio = Id do usuarioLogado
                    if((coleta.usuario_coleta.id == userId.id) && (coleta.anuncio.tipo_status_anuncio.nome == "Coleta Finalizada") ){
                            dadosAnuncio.push(coleta);
                    }
                });
                setColetaLista(dadosAnuncio)
            })
    }

    function filtrarProdutos(coleta:any){
        let produto:any = []
        produtoLista.forEach((item:any):any => {   
            if(item.anuncio.id === coleta.anuncio.id){
                if (typeof item ==="object" && item.length != 0){
                    if(item != undefined && item !=null){
                        if(typeof item != 'undefined'){
                            produto.push(item)      
                        }
                    }
                }
            }

        });
        return produto
    }

    function somarProdutos(anuncio:any):number{
        let soma = 0; 

            for(var i =0;i<anuncio.length;i++){ 
                soma+=anuncio[i].quantidade; 
            } 
          return soma;
    }

    function renderColor(str:string){
        if(str=="Aguardando Agendamento"){
            return "circle_Yellow"
         }if(str =="Coleta Agendada"){
            return "circle_Green"
         }else{
            return "circle_Orange"
         }
    }


    return (
        <>
            <main id='mainColetasAgendadas'>
                <h1>página coletas agendadas ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        {/* Abaixo está sendo chamado o  componente aside */}
                        <Aside idSeletor={2} />

                        <div className="menu_Direito">
                            <div className="title">
                                <h2>coletas agendadas</h2>
                                <p>Visualize o histórico e agendamentos ativos aqui</p>
                            </div>
                            <div>
                                <CardColetaSeletor idSeletor={1}/>
                                <div className="historic_cards">
                                <div className={ coletaLista.length ? "Conteudo_Cards" : ""}>
                                        {
                                            coletaLista.length
                                            ? coletaLista.map((coleta: any, index: number) => {
                                                return <div className="cards" key={index}>
                                                    <Card
                                                        tituloCard= { coleta.anuncio.titulo }
                                                        imgBackground={ coleta.anuncio.url_imagem }
                                                        conteudoCardData={ coleta.anuncio.data_cadastro }
                                                        conteudoCardQuantidade={ somarProdutos(filtrarProdutos(coleta)) }
                                                        conteudoCardOwner = { coleta.anuncio.usuario_doador.nome.split(" ")[0] }
                                                        descricoes={ filtrarProdutos(coleta) }
                                                        cidade={ coleta.anuncio.usuario_doador.endereco.cidade }
                                                        estado={ coleta.anuncio.usuario_doador.endereco.estado }
                                                        corStatus={ renderColor(coleta.anuncio.tipo_status_anuncio.nome) }
                                                        status={ coleta.anuncio.tipo_status_anuncio.nome }
                                                        
                                        />
                                                </div>
                                            })
                                            :  <SacolaVazia />
                                        }
                                        
                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}

export default ColetasFinalizadas;