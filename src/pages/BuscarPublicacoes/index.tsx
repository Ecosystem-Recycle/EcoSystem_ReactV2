import './style.css'
import Aside from '../../components/Aside'
// import { Link } from "react-router-dom";
import CardBuscarPublicacoes from '../../components/CardBuscarPublicacoes'
// import secureLocalStorage from 'react-secure-storage'
import { useState, useEffect } from 'react'
import api from '../../utils/api'
// import no_imagem from '../../assets/img/img_Baterias.png'

function BuscarPublicacoes() {

    const [anuncios, setAnuncios] = useState<any[]>([])
    const [produtos, setProdutos] = useState<any[]>([])
    // const [userId] = useState<any>(secureLocalStorage.getItem("userId"));
    
    useEffect(() => {
        document.title = "Buscar por Publicações - Ecosystem e Recycle"

        listarAnuncios();
        listarProdutos();
    }, [])

    function listarAnuncios() {
        api.get("anuncio")
            .then((responseAnuncio: any) => {
                console.log(responseAnuncio.data)

                setAnuncios(responseAnuncio.data)
            })
    }

    function listarProdutos(){
        api.get("/produto").then((resListaProduto: any)=>{
            let listaProdutos:any = []
            listaProdutos = resListaProduto.data
            setProdutos(listaProdutos);
            console.log(listaProdutos)
        })
    }

    function filtrarProdutos(anuncio:any){
        let produto:any = []
        produtos.forEach((item:any):any => {   
            if(item.anuncio.id === anuncio.id){
                if (typeof item ==="object" && item.length != 0){
                    if(item != undefined && item !=null){
                        if(typeof item != 'undefined'){
                            produto.push(item)      
                        }
                    }
                }
            }

        });
        console.log(produto);
        return produto;
    }

    function somarProdutos(anuncio:any):number{
        let soma = 0; 

            for(var i =0;i<anuncio.length;i++){ 
                soma+=anuncio[i].quantidade; 
            } 
          return soma;
    }

    return (
        <>
            <main id='mainBuscarPublicacoes'>
                <h1>página buscar por publicações ecosystem &amp; recycle</h1>
                <section>
                    <div className="conteudo_doacoes wrapper">
                        <Aside idSeletor={1} />
                        <div className="menu_Direito">
                            <div className="title">
                                <h2>Buscar por Publicações</h2>
                                <p>Veja todas as publicações ativas mais próximas de você!</p>
                            </div>
                            {
                            anuncios.map((dadosCombinados: any) => {
                                //Se o Status do anuncio for "Aguardando Agendamento" ele o exibirá, caso negativo não exibe
                                if(dadosCombinados.tipo_status_anuncio.nome == "Aguardando Agendamento"){
                                    return <div key={dadosCombinados.id}>
                                        <CardBuscarPublicacoes
                                            imagem={ dadosCombinados.url_imagem }
                                            titulo={dadosCombinados.titulo}
                                            data={dadosCombinados.data_cadastro}
                                            quantidade={somarProdutos(filtrarProdutos(dadosCombinados))}
                                            descricoes={ filtrarProdutos(dadosCombinados) }
                                            cidade={dadosCombinados.usuario_doador.endereco.cidade}
                                            estado={dadosCombinados.usuario_doador.endereco.estado}
                                            id={ dadosCombinados.id }
                                        />
                                    </div>
                                }
                            })}

                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default BuscarPublicacoes;