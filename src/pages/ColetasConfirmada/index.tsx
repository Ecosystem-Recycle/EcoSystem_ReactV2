import Aside from '../../components/Aside'

import './style.css'

import img001 from '../../assets/img/img_001png.png'
import CardConfirmarColeta from '../../components/CardConfirmarColeta';



function ColetasConfirmada(props:any) {
  function msgRetirarMaterial() {
    alert('Confira todo o material e Confirme a retirada');
  }

  return (
    <main id='mainColetasConfirmada'>
      <h1>página coletas confirmadas ecosystem &amp; recycle</h1>
      <section>
        <div className="conteudo_doacoes wrapper">
          <Aside idSeletor={2}/>

          <div className="menu_Direito">
            <div className="title">
              <h2>Coletas Agendadas - Agendamento Confirmado</h2>
              <p>Confira o horário do agendamento corretamente.</p>
            </div>
            <div>
              <div className="margem_Doacao">
                <div className="Conteudo_Doacao">
                  <CardConfirmarColeta
                  src={img001}
                  />
                  <div className="dados_horario">
                    <h4>Horário da retirada</h4>
                    <div>
                      <p>
                        <span>Data: </span>{props.dataColeta ? props.dataCoelta : "20/05/23"}
                      </p>
                      <p>
                        <span>Horário: </span>{props.horario ? props.horario : "18:30"}hrs
                      </p>
                    </div>
                  </div>
                  <div className="dados_local">
                    <h4>Localização</h4>
                    <p>
                    {props.localizacao ? props.localizacao : "AV do Brasil, N° 1000 - apt 25/Bloco D - SBC - SP "}
                    </p>
                    <p>CEP: {props.cep ? props.cep : "12345-678"}</p>
                  </div>
                  <div className="dados_responsavel">
                    <h4>Responsável:</h4>
                    <p>{props.nome ? props.nome : "Luis Monteiro"}</p>
                  </div>
                </div>
                <div className="btnRetirar">
                  <a href="#" onClick={msgRetirarMaterial}>
                    Retirar Material
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

export default ColetasConfirmada;