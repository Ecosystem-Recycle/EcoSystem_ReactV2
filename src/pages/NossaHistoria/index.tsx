import './style.css'
import pessoas from "../../assets/img/img_grupo.png"
import missao from "../../assets/img/Icone_Missao.svg"
import visao from "../../assets/img/Icone_Visao.svg"
import valores from "../../assets/img/Icone_Valores.svg"

function NossaHistoria (){


  return (
        <>
        <main id='mainNossaHistoria'>
  <h1>página nossa história ecosystem &amp; recycle</h1>
  <section className="banner1">
    <div className="div_banner1Position wrapper">
      <div className="div_banner">
        <div>
          <h2>Um Pouco Sobre Nós</h2>
          <p>
            Com as dificuldades ambientais que estamos enfrentando com efeito
            estufa e outros fenômenos da natureza a empresa Volksvagem
            compreendeu a necessidade urgente de criar soluções para resolver
            parte do vilão que contribuem para estes problemas e desenvolver no
            tocante social e econômico. Com a convicção de poder acelerar a
            mudança de cenário reuniu parceiros e doadores para com objetivos de
            desenvolvimento sustentável. Dessa forma Eco System &amp; Recycle
            nasceu da necessidade por soluções que acelerem iniciativas de forma
            rápida e orgânica tornando se empresa de impacto socio ambiental.
          </p>
        </div>
        <img
            src={pessoas}  
          alt="Imagem com grupo de pessoas simbolizando o nosso trabalho em equipe"
        />
      </div>
    </div>
  </section>
  <section className="banner2">
    <div className="div_banner2">
      <div>
        <h3>missão</h3>
        <img
          src={missao}

          alt="Icone de um alvo com uma flecha no centro"
          className="img_missao"
        />
        <p>
          Investimentos industriais e financeiros, trazendo a sustentabilidade
          financeira e o impacto positivo ao meio ambiente para sociedade
          através da tecnologia.
        </p>
      </div>
      <div>
        <h3>visão</h3>
        <img
          src={visao
        } 
          alt="Icone de um olho simbolizando a visão da empresa"
          className="img_visao"
        />
        <p>
          Melhorar a situação socioeconômico e do meio ambiente, para garantir
          que, sejam atendidos de acordo com as metas dos objetivos do
          desenvolvimento sustentável e das boas práticas ESG (governança
          ambiental, social e corporativa).
        </p>
      </div>
      <div>
        <h3>valores</h3>
        <img
          src={valores}
          alt="Icone de um computador com um símbolo de tickado simbolizando os valores da empresa"
          className="img_valor"
        />
        <p>
          Acelerar o desenvolvimento ambiental, sustentabilidade, economia
          circular, descarte correto, saúde da população é nossa prioridade.
        </p>
      </div>
    </div>
  </section>
</main>
            
        </>
    )
}

export default NossaHistoria;