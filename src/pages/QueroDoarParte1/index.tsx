import './style.css'

import api from "../../utils/api"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import secureLocalStorage from 'react-secure-storage'

import AsideDoador from '../../components/AsideDoador'
import LinhaProduto from '../../components/LinhaProduto'

import icoAdd from '../../assets/img/add.svg'
import icoDel from '../../assets/img/del.svg'
import imgPadrao from '../../assets/img/default.jpg'




function QueroDoarParte1() {
  const navigate = useNavigate()
  const [listarProdutos, setListarProdutos] = useState<any[]>([]);
  const [ foto, setFoto ] = useState<any>();

  const [userId, setUserId] = useState<any>({});
  
  const [ totalItens, setTotalItens ] = useState<number>(0);  


  const [formValues, setFormValues] = useState<any>({
    categoria: "",
    nome: "",
    quantidade: ""
  });

  const [valoresInput2, setValoresInput2] = useState<any>({
    titulo: "",
    disponibilidade: "",
    periodo: ""
  });

  useEffect( () => {
    document.title = "Quero Doar - Ecosystem e Recycle"

    const userObj:string | number | boolean | object | null = secureLocalStorage.getItem("userId");
    setUserId(userObj)
    
    carregarProduto();
}, [userId] )

  
  //Verificar o tipo de arquivo da Imagem
  function verificarCampoUpload( event: any ) {
    setFoto(event.target.files[0]);
  }

  function cadastrarProduto(event: any) {
        event.preventDefault();
       
        let produtoLista = [];
        
        //Caso tenha alugm produto essa array revebe os valores dos respectivos Objetos
        if(localStorage.getItem("listaProdutosCadastrados") != null){
          produtoLista = JSON.parse(localStorage.getItem("listaProdutosCadastrados") || "");
        }
        
        //Varialvel que recebe os valores do novo produto(Objeto)
        let novoItemLista = {
          "categoria": formValues.categoria,
          "nome": formValues.nome, 
          "quantidade": parseInt(formValues.quantidade)
        };

        //Atualiza a Lista{Array de Objetos} com o novo produto
        produtoLista.push(novoItemLista);

        localStorage.setItem('listaProdutosCadastrados', JSON.stringify(produtoLista));

       limparCampos('produto');

        carregarProduto();
    }

    function cadastrarAnuncio(event: any):any {
      event.preventDefault();
       
      if(listarProdutos.length <= 0){
        alert('Adicione ao menos 1 Produto na Lista')
        return
      }

        if(userId.id != null || userId.id != undefined ) {

          const formData = new FormData();

          formData.append("titulo", valoresInput2.titulo)
          formData.append("disponibilidade", valoresInput2.disponibilidade)
          formData.append("periodo", valoresInput2.periodo)
          formData.append("usuario_id", userId.id);
          formData.append("tipo_status", "Aguardando Agendamento");
          if(foto){
            formData.append("imagem", foto);  
          }
          
          api.post("anuncio", formData).then( (responseAnuncio:any) => {
            var templateParams = {
              email_usuario: userId.email,
              titulo_anuncio: valoresInput2.titulo,
              nome_usuario: userId.nome
            };

            emailjs.send('service_sot9b9w', 'template_newAnuncio', templateParams, 'NvrSMkZ1YOmgWkIBm')
              .then(function(response) {
                 console.log('SUCCESS!', response.status, response.text);
              }, function(error) {
                 console.log('FAILED...', error);
            });
           salvarProduto(responseAnuncio.data.id)
           
          }).catch( (error:any) => {
              console.log(error)
          })
        } else {
            alert('ID não encontrado')
            return
        } 
      
    } 

    function salvarProduto(anuncioId:any){
      //Apos receber o ID cadastrar os Produtos

      listarProdutos.forEach((produto:any) => {
      //Atualiza a Lista com o novo produto
      const produtoCadastro: { 
        nome: string, 
        quantidade: number,
        anuncio_id: string, 
        categoria: string } = 
      {
        nome: produto.nome,
        quantidade: produto.quantidade,
        anuncio_id: anuncioId,
        categoria: produto.categoria
      }
      
      
      api.post("produto", produtoCadastro).then( (responseProduto:any) => {
        console.log(responseProduto)
        
      }).catch( (error:any) => {
         console.log(error)
      })
      });
      
      limparCampos('anuncio');
      limparLista();
      alert('Anuncio Registrado com sucesso')
      navigate(0);
      
      }
  
    function cancelarAnuncio(){
      limparLista();
      navigate(0);
    }

function carregarProduto(){
  
  let listaCarregada:any = [];
  setListarProdutos(listaCarregada);
  if(localStorage.getItem("listaProdutosCadastrados") != null){
      //Guarda as informações na Array e converte string para Objeto
      listaCarregada = JSON.parse(localStorage.getItem("listaProdutosCadastrados") || "");
  }
    //Cadastra a nova listaAtualizada
    setListarProdutos(listaCarregada);
    let total = 0;

    listaCarregada.forEach((item:any) => {
               //Atualiza a Lista com o novo produto
               total+=(item.quantidade)
             });
    setTotalItens(total);
}

function limparLista(){
  localStorage.removeItem("listaProdutosCadastrados");
  carregarProduto();
}

function limparCampos(qualTipo:string){

  if(qualTipo == "anuncio"){
    //Limpa os Campos do Anuncio
    setValoresInput2({
      titulo: "",
      disponibilidade: "",
      periodo: ''
    });
    setFoto("");
  }else {
     //Limpa os Campos produtoLista
     setFormValues({
      categoria: "",
      nome: "",
      quantidade: ''
    });
  }
  
}
  

  return (
    <>
      <main id='mainQueroDoarParte1'>
        <h1>página quero doar parte 2 ecosystem &amp; recycle</h1>
        <section>
          <div className="conteudo_doacoes wrapper">
            <AsideDoador idSeletor={1}/>
            <div className="menu_Direito">
              <div className="title">
                <h2>Quero Doar!</h2>
                <p>
                  Aqui você pode selecionar a<br />
                  categoria do produto que gostaria de cadastrar
                </p>
              </div>
              <div>
                <div className="Conteudo">
                  <div className="conteudo_wrapper">
                  <h3>Adicionar Itens a sua lista de doação:</h3>
                  <form onSubmit={ cadastrarProduto } className="cad_formulario" method="post">
                    <div className="camposDuplo">
                      <div className="campo-form">
                        <label htmlFor="selectCategoria">Categoria:</label>
                            <select 
                              className="selectCategoria"  
                              name="selectCategoria" 
                              id="selectCategoria" 
                              placeholder="Selecione"
                              required
                             
                              value={formValues.categoria}
                              onChange={ (event) =>  setFormValues({...formValues, categoria: event.target.value}) }  
                            >   <option disabled value="">Selecione</option>
                                <option value="Informatica">Informatica</option>
                                <option value="Telefonia">Telefonia</option>
                                <option value="Peças e Acessorios">Peças e Acessorios</option>
                            </select>
                      </div>
                      <div className="campo-form">
                        <label htmlFor="nomeProduto">Descrição:</label>
                        <input 
                          value={formValues.nome}
                          type="text" 
                          name='nomeProduto'
                          id='nomeProduto'
                          placeholder='Descrição. Ex: Celular - Marca'
                          required
                          onChange={ (e) =>  setFormValues({...formValues, nome: e.target.value}) }  
                        />
                      </div>
                      <div className="campo-form">
                        <label htmlFor="quantidadeProduto">Quantidade:</label>
                        <input 
                          value={formValues.quantidade}
                          type="text" 
                          name='quantidadeProduto'
                          id='quantidadeProduto'
                          placeholder='Digite a quantidade'
                          required
                          onChange={ (event) =>  setFormValues({...formValues, quantidade: event.target.value}) }  
                        />
                      </div>
                    </div>
                    <div className="btn_form cad_botao">
                      <button type="submit">
                        <div className="btnInserir">
                          <span>Incluir</span>
                          <img src={ icoAdd } alt="" />
                        </div>
                      </button>
                    </div>
                  </form>
                  <section className="listaItens">
                    <table>
                      <caption>Lista de Itens:</caption>
                      <thead>
                          <tr>
                              <th>Item</th>
                              <th colSpan={2}>Quantidade</th>                   
                          </tr>
                      </thead>
                      <tbody id="corpo-tabela">
                      {listarProdutos.map((produto:any, index: number) => (          
                          <tr  key={index}>
                              <LinhaProduto
                                descricaoNome={produto.nome}
                                descricaoQuantidade={produto.quantidade}
                              />
                          </tr>
                      )
                        )}
                      </tbody>
                    </table>
                    <div className="totalItens">
                    <div className="btn_form cad_botao">
                      <button type="button" onClick={limparLista}>
                        <div className="btnLimparLista">
                          <img src={ icoDel } alt="" />
                          <span>Limpar Lista</span>
                        </div>
                      </button>
                    </div>
                      <div>
                        <span>Total de Itens:</span>
                        <div>
                          <span>{totalItens}</span>
                        </div>
                      </div>
                     
                    </div>
                  </section>
                  <section className="gerarAnuncio">
                    <h3>Informações gerais para doação:</h3>
                    <form onSubmit={ cadastrarAnuncio } className="cad_formulario" method="post">
                      <div className="campo-form">
                        <label htmlFor="titleDoacao">Título da doação:</label>
                        <input 
                          type="text" 
                          id='titleDoacao' 
                          name='titleDoacao' 
                          placeholder='Digite aqui o título do lote de doações que irá disponibilizar'
                          required
                          onChange={ (event) =>  setValoresInput2({...valoresInput2, titulo: event.target.value}) }
                        />
                      </div>
                      <div className="camposDuplo">
                        <div className="campo-form">
                          <label htmlFor="horarioDisponivel">Data de retirada:</label>
                          <input 
                            type="text" 
                            id='horarioDisponivel' 
                            name='horarioDisponivel' 
                            placeholder='Ex: Seg-Sex // Ter e Qua'
                            required
                            onChange={ (event) =>  setValoresInput2({...valoresInput2, disponibilidade: event.target.value}) }
                           />
                        </div>
                        <div className="campo-form">
                          <label htmlFor="selectPeriodo">Período:</label>
                          <select 
                            className="selectPeriodo"  
                            name="selectPeriodo" 
                            id="selectPeriodo" 
                            placeholder="Selecione"
                            required
                            
                            value={valoresInput2.periodo}
                            onChange={ (event) =>  setValoresInput2({...valoresInput2, periodo: event.target.value}) }
                            >
                              <option disabled value="">Selecione:</option>
                              <option value="Manha">Manhã</option>
                              <option value="Tarde">Tarde</option>
                              <option value="Noite">Noite</option>
                              <option value="Integral">Integral</option>
                          </select>
                        </div>
                      </div>
                      <div className="arquivos">

                        
                        <div className="adicionarFotos">
                          <div>
                          { 
                            foto 
                            ? <img
                                src={ URL.createObjectURL(foto) }
                                alt="Upload de Imagem Padrão"
                              />
                            : <img
                                src={ imgPadrao }
                                alt="Upload de Imagem Padrão"
                              />
                          }
                            
                          </div>
                          <label htmlFor="imagem1">+ Adicionar Foto</label>              
                          <input 
                            tabIndex={ 0 }
                            type="file" 
                            name="imagem1" 
                            id="imagem1" 
                            accept="image" 
                            onChange={ verificarCampoUpload }
                          />
                          
                          
                        </div>

                          
                        
                      </div>
                      <div className="btnPublicar">
                        <button type="submit">
                          Publicar
                        </button>
                        <button type="button" onClick={ cancelarAnuncio }>Cancelar</button>
                      </div>

                    </form>
                  </section>
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

export default QueroDoarParte1;