import { useEffect, useState } from 'react';
import './style.css';

import Aside from '../../components/Aside';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import CardAgendarColeta from '../../components/CardAgendarColeta';
import secureLocalStorage from 'react-secure-storage';
import api from '../../utils/api';


function AgendarColeta() {

    const [userId] = useState<any>(secureLocalStorage.getItem("userId"));
    const navigate = useNavigate()
    const [anuncioInfo] = useState<any>(secureLocalStorage.getItem("anuncioInfo"));

    const [produtosAnuncio, setProdutosAnuncio] = useState<any[]>([]);

    const [data, setData] = useState<string>("")
    const [horario, setHorario] = useState<string>("")

    useEffect( () => {
        document.title = "Agendar Coleta - Ecosystem e Recycle"
        if(produtosAnuncio.length==0){
            carregarProdutos()
            
        }

    }, [] )

    useEffect(() => {
        console.log(anuncioInfo)
      }, [produtosAnuncio]); 

    function cadastroAgendamento(event: any) {
        event.preventDefault()

        const formData = new FormData();

        formData.append("disponibilidade", data)
        formData.append("tipo_status", "Coleta Agendada")
        formData.append("anuncio_id", anuncioInfo.id)
        formData.append("usuario_id", userId.id)

        api.post("coleta/media", formData).then( (responseAnuncio:any) => {
                
                atualizarStatusAnuncio(anuncioInfo.id)
                //Função de Enviar Email com os parâmetros de dados do anuncio
                enviarEmail(
                    anuncioInfo.usuario_doador.nome,
                    anuncioInfo.usuario_doador.email,
                    anuncioInfo.titulo,
                    data,
                    anuncioInfo.periodo
                )

                secureLocalStorage.removeItem("anuncioInfo")
                alert("Coleta Agendada com Sucesso")
                navigate("/coletasagendadas")
                navigate(0)

           }).catch( (error:any) => {
               console.log(error)
           })
    }

    function enviarEmail(_nomeDoador:string, _emailDoador:string, _tituloAnuncio:string,_dataAnuncio:string,_periodoAnuncio:string){
        //Objeto com as variáveis do template de Email
        var templateParams = {
            nome_doador: _nomeDoador,
            email_doador: _emailDoador,
            titulo_anuncio: _tituloAnuncio,
            data_anuncio: _dataAnuncio,
            periodo_anuncio: _periodoAnuncio,
            nome_coletor: userId.nome,
            email_coletor: userId.email
          };
        //Funcao para enviar o EmaiJS passando o Serviço, nomeTemplate, parametros e chavePublica
        emailjs.send('service_0en0u75', 'template_nova_coleta', templateParams, 'YZMWXN82GCbwyOvsW')
        .then(function(response) {
             console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
             console.log('FAILED...', error);
        });
    }

    function atualizarStatusAnuncio(id: string){
        const atualizarStatus: { tipo_status: string } = { tipo_status: "Coleta Agendada" }
        api.patch("anuncio/status/" + id, atualizarStatus).then( (responseStatus:any) => {
       }).catch( (error:any) => {
           console.log(error)
       })
    }


    function carregarProdutos(){
        api.get("/produto").then((resListaProduto: any)=>{
            let listaProdutos:any = []
            
            resListaProduto.data.forEach((item:any):any => {   
                if(item.anuncio.id === anuncioInfo.id){
                    if(typeof item != 'undefined'){
                        listaProdutos.push(item)      
                    }
                }

            });
            setProdutosAnuncio(listaProdutos);
        })
    }

    function somarProdutos(anuncio:any):number{
        let soma = 0; 

            for(var i =0;i<anuncio.length;i++){ 
                soma+=anuncio[i].quantidade; 
            } 
          return soma;
    }
    

    return (
        <main id='agendarColeta'>
            <h1>página agendar coleta ecosystem &amp; recycle</h1>
            <section>
                <div className="conteudo_doacoes wrapper">
                    <Aside idSeletor={2}/>
                    <div id='idConteudoPublicacoes' className="conteudoPublicacoes">
                        <div className="headerPublicacoes">
                            <h2>Agendar Coleta</h2>
                            <p>Agende aqui a sua retirada do material</p>
                        </div>
                        <div  id="containerCard"   className="containerCard">

                            < CardAgendarColeta
                                titulo={anuncioInfo.titulo}
                                imagem={ anuncioInfo.url_imagem }
                                dataPublicacao={ anuncioInfo.data_cadastro }
                                quantidadeItem={somarProdutos(produtosAnuncio)}
                                descricoes={ produtosAnuncio }
                                logradouro={anuncioInfo.usuario_doador.endereco.logradouro}
                                numero={anuncioInfo.usuario_doador.endereco.numero}
                                cidade={anuncioInfo.usuario_doador.endereco.cidade}
                                estado={anuncioInfo.usuario_doador.endereco.estado}
                                cep={anuncioInfo.usuario_doador.endereco.cep}
                                disponibilidade={ anuncioInfo.disponibilidade }
                                periodo={anuncioInfo.periodo}
                            />
                            <div className="form_text">
                                <h3>Agendar Retirada</h3>
                            </div>
                                <form onSubmit={ cadastroAgendamento } className="cardBottom">
                                    <div className="cardBottomPt1">
                                        <div className="campo-form">
                                            <label htmlFor='data'>Data:</label>
                                            <input
                                                defaultValue={""}
                                                type="text"
                                                name='data'
                                                id="data"
                                                onChange={(event) => {setData(event.target.value) } }
                                                required
                                            />
                                        </div>
                                        <div className="campo-form">
                                            <label htmlFor='periodo'>Período:</label>
                                            <input
                                                type="text"
                                                name='periodo'
                                                id='periodo'
                                                value={ anuncioInfo.periodo }
                                                onChange={(event) => {setHorario(event.target.value) } }
                                                required
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className='btnAgendar'>
                                        <button  type="submit">
                                            Agendar
                                        </button>
                                    </div>
                                </form>
                                <div className='nextStep'>
                                {/* <Link to="/buscarpublicacoes">Voltar</Link>
                                <Link to="/coletasagendadas">Agendar</Link> */}
                                </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default AgendarColeta;