import './style.css'
import lixoEletronicoServicos from "../../assets/img/lixoEletronicoServiços.jpeg"
import simboloLogisticaReversa from "../../assets/img/simboloLogisticaReversa.svg"

function Servicos(){


    return (
        
        <main id='mainServicos' className='wrapper'>
        <h1>página serviços - ecosystem e recycle</h1>
        <section>
          <div className="tituloCarrosel wrapper">
            <h2>Serviços</h2>
            <img
              src={lixoEletronicoServicos}
              alt="Banner de Lixo Eletrônico"
            />
          </div>
        </section>
        <section>
          <div className="wrapper">
            <div className="icone">
              <img
                src={simboloLogisticaReversa}
                alt="Simbolo da Logística reversa"
              />
            </div>
            <div>
              <p className="subtitulo1">
                Coleta e Localização de Pontos para Descarte
              </p>
              <p className="texto1">
                Todos os nossos serviços são prestados aos nossos parceiros de forma
                simplificada, segura e prática. No primeiro contato com o Eco System
                &amp; Recycle, realizamos o cadastro, você disponibiliza em nossa
                plataforma todas as informações dos ítens que deseja descartar e o
                coletor parceiro agenda uma visita para coleta direta do lixo
                eletrônico e seus derivados. Caso queira você mesmo fazer o descarte,
                o Localizados de Postos de Descarte irá te auxiliar na localização de
                um ponto mais próximo da sua residência ou empresa.
              </p>
            </div>
            <div>
              <p className="subtitulo2">Reciclagem</p>
              <p className="texto2">
                Para entender um pouco sobre o processo de reciclagem, o melhor é
                entender o objetivo de realizá-lo e como as vantagens obtidas
                beneficiam diretamente a todos. Reciclar nada mais é do que recuperar
                partes reutilizáveis ​​de produtos consumidos, reintroduzindo-os no
                ciclo produtivo da sua origem ou criando outros objetos a partir desta
                matéria-prima. A relevância do sistema é trazer reaproveitamento e
                nova vida aos objetos descartados, mas ainda pode ser utilizado para
                diversas outras atividades. Desta forma, os resíduos podem ser
                reintroduzidos no ciclo produtivo com impacto positivo no meio
                ambiente. O processo de reciclagem é realizado a partir da coleta
                seletiva no lixo.
              </p>
            </div>
            <div>
              <p className="subtitulo3">Reaproveitamento</p>
              <p className="texto3">
                O processo de reciclagem de lixo eletrônico começa com a coleta ou
                recebimento de materiais. Esse é o movimento inverso da linha de
                montagem logo após a desmontagem do aparelho, em um processo conhecido
                como manufatura reversa. Cada material é classificado (plástico,
                metal, placa de circuito, vidro, metal pesado, elemento químico,
                etc.). Um tipo de lixo eletrônico difícil de reciclar são as placas de
                circuito impresso (PCBs), que são usadas em quase todos os
                dispositivos eletrônicos ou tecnológicos (computadores, carros,
                smartphones). As placas são altamente heterogêneas em composição,
                contendo uma variedade de metais pesados ​​como chumbo, cobre, cádmio
                e níquel, além de metais preciosos como ouro, prata e platina. Por
                isso sua reciclagem é muito importante tanto econômica quanto
                ambientalmente.
              </p>
            </div>
          </div>
        </section>
      </main> 
        
    )
}

export default Servicos;