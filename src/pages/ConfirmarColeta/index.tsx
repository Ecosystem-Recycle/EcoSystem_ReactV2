import AsideDoador from '../../components/AsideDoador'
import './style.css'
import imgCelAntigos from '../../assets/img/img_001png.png'
import { Link } from "react-router-dom";
import CardConfirmarColeta from '../../components/CardConfirmarColeta';



function ConfirmarColeta (){
    function msgConfirmarColeta(){
        alert('A sua doação foi agendada! Separe o material e aguarde o coletor vir retira-lo.');
      };

    return (
        <main id='mainConfirmarColeta'>
        <h1>página confirmar coleta ecosystem &amp; recycle</h1>
        <section>
          <div className="conteudo_doacoes wrapper">
          <AsideDoador idSeletor={2}/>
            <div className="menu_Direito">
              <div className="title">
                <h2>Minhas Doações - Confirmar Agendamento</h2>
                <p>Confirme a data e horário do nosso parceiro</p>
              </div>
              <div>
                <div className="margem_Doacao">
                  <div className="Conteudo_Doacao">
                    <CardConfirmarColeta
                    src={imgCelAntigos}
                    alt={"Imagem com sucata de celulares"}
                    />
                    <div className="dados_parceiro">
                      <h4>Dados do Parceiro</h4>
                      <p>Empresa: Recicla Tudo</p>
                      <p>
                        Endereço: Rua da reciclagem - Diadema SP / CEP 01234 - 567
                      </p>
                    </div>
                    <div className="dados_horario">
                      <h4>Horário do coletor para retirada</h4>
                      <div>
                        <p>
                          <span>Data: </span>20/05/23
                        </p>
                        <p>
                          <span>Horário: </span>18:30hrs
                        </p>
                      </div>
                    </div>
                    <div className="form_obs">
                      <form>
                        <label htmlFor="msgObs">Observação:</label>
                        <textarea
                          id="msgObs"
                          name="msgObs"
                          rows={10}
                          cols={160}
                          placeholder="Complete com algum comentário, dúvida ou sugestão caso necessário.."
                          defaultValue={""}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="btnVoltar">
                    {/* <a
                      href="../Tela_Minhas_Doacoes/index.html"
                      onClick={ msgConfirmarColeta }
                    >
                      confirmar
                    </a> */}
                    <Link to="/minhasdoacoes" onClick={ msgConfirmarColeta }>confirmar</Link>


                    <a href="#" onClick={ history.back }>
                      cancelar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    )
}

export default ConfirmarColeta;