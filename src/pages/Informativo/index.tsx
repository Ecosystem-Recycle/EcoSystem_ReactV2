import './style.css'
import img_lixo1 from '../../assets/img/lixo1.png'
import img_simbolo_reciclagem2 from '../../assets/img/simbolo reciclagem2.png'
import img_ciclo_logistico from '../../assets/img/ciclo_logistico.png'
// import tabela from "../../assets/img/tabela.png"

function Informativo() {
    return (
        <>
            <main id='mainInformativo'>
                <h1>página Informativo ecosystem &amp; recycle</h1>
                <section className="banner_fundo">
                    <div>
                        <div className="lixo1 wrapper">
                            <img className="lixo1" src={img_lixo1} alt="lixo1" />
                            {/* <div class="lixo1_filho"> */}
                            <h2>ESG</h2>
                            <p>
                                Por que a sigla se tornou prioridade para empresas? De empresas a
                                startups, o ESG fez a responsabilidade ambiental, social e de
                                governança se tornar prioridade. Por que o ESG teve tanto poder para
                                gerar mudança?
                                Unir e criar uma sigla não foram os únicos motivos que impactaram a
                                adoção dos princípios em empresas de diversos tamanhos e segmentos. O
                                impulso para a preocupação com o ESG aconteceu de dois lados: os
                                consumidores passaram a consumir mais das empresas que se preocupam
                                com as práticas e os investidores passaram a priorizar – e pagar mais
                                – por ações de empresas que praticam o ESG.
                            </p>
                            {/* </div> */}
                        </div>
                    </div>
                </section>
                <section className="banner_fundo">
                    <div className="wrapper lixo2">
                        <img
                            className="simbolo2"
                            src={img_simbolo_reciclagem2}
                            alt="simbolo2"
                        />
                        <p>
                            Econômia Circular: Economia circular é um conceito que associa
                            desenvolvimento econômico a um melhor uso de recursos naturais, por meio
                            de novos modelos de negócios e da otimização nos processos de fabricação
                            com menor dependência de matéria-prima virgem, priorizando insumos mais
                            duráveis, recicláveis e renováveis.
                        </p>
                    </div>
                </section>
                <section>
                    <div className="tutorial">
                        <h2>Tutorial</h2>
                        <iframe
                            className="video_logistiaca"
                            src="https://www.youtube.com/embed/T_GpFHzNpIU"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                        />
                    </div>
                </section>
                <section>
                    <div className="ciclo_logistico wrapper">
                        <h2>Ciclo da Logística Reversa</h2>
                        <div className="logistica">
                            <img src={img_ciclo_logistico} alt="foto" />
                            <p>
                                A Logística Reversa é um instrumento de desenvolvimento econômico e
                                social caracterizado por um conjunto de ações, procedimentos e meios
                                destinados a viabilizar a coleta e a restituição dos resíduos sólidos
                                ao setor empresarial, para reaproveitamento, em seu ciclo ou em outros
                                ciclos produtivos, ou outra destinação.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="descartar">
                        {/* <div> */}
                        <h2>Porque descartar corretamente?</h2>
                        {/* </div> */}
                        <iframe
                            className="video_logistiaca"
                            src="https://www.youtube.com/embed/vLd9yAYNdz0?start=6"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                        />
                    </div>
                </section>
                <section>
                    <div className="impacto wrapper">
                        <h2>Impacto Ambiental</h2>
                        <p>
                            Realizamos programas de recuperação de materiais essenciais em nossos
                            centros de distribuição e escritórios, com a missão de reinserir os
                            recursos utilizados no ciclo produtivo. Desde 2015, promovemos um
                            programa regional de reciclagem com esquemas de separação e coleta
                            seletiva dos resíduos no local. Em todos os nossos centros de
                            distribuição, mais de 85% dos materiais são recuperados com parceiros
                            locais. No caso do papelão, em particular na Argentina e no México, o
                            material é recuperado e enviado para reciclagem e produção de novas
                            caixas ou papelão. Implementamos também o programa de logística reversa,
                            oferecido a vendedores com um potencial de reutilização de produtos de
                            cerca de 40% do volume total de itens trocados ou devolvidos. Desde seu
                            lançamento no Brasil,


                        </p>
                        <h2>Elementos químicos que podem causar mal ao meio ambiente</h2>
                    </div>
                </section>
                <section className="tabela_periodica">
                    {/* <img className="tabela" src={tabela} alt="" /> */}
                    <p>
                        Chumbo – provavelmente o elemento químico mais perigoso; acumula-se nos ossos, cabelos, unhas, cérebro, fígado e rins;
                        provoca dores de cabeça e anemia, mesmo em baixas concentrações; atua nos sistemas nervoso, renal e hepático.
                        Cobre – causa intoxicação; afeta o fígado. Alumínio – favorece o aparecimento da doença de Alzheimer e tem efeito tóxico nas plantas.
                        Cádmio – acumula-se nos rins, fígado, pulmões, pâncreas, testículos e coração; causa intoxicação crônica; causa descalcificação
                        óssea, danos renais e afeta os pulmões; tem efeitos teratogênicos e cancerígenos.

                        {/* <span id="tresPontos">...</span><span id="mostrarMais"> */}


                    </p>


                    {/* <button onClick="leiaMais()" id="btnLeiaMais" class="btnLeiaMais">Leia Mais</button> */}


                    {/* linha de separacao HR <hr /> */}

                    <h2> Dados sobre o descarte do lixo eletrônico. </h2>

                    <p>Fones de ouvido, pilhas, celulares, eletrodomésticos. Todos esses utensílios, quando deixam de funcionar e não são mais aproveitados,
                        viram lixo eletrônico. O Brasil o quinto maior gerador desse lixo no mundo. Mesmo assim, muita gente ainda não sabe o que esse tipo de
                        resíduo e como ele deve ser descartado para evitar danos ao meio ambiente e saúde humana.
                        As informações são da pesquisa Resíduos eletrônicos no Brasil - 2021, divulgada hoje 7 pela Green Eletron, gestora sem fins lucrativos
                        de logística reversa de eletroeletrônicos e pilhas. O estudo foi conduzido pela Radar Pesquisas.
                        A maior parte dos brasileiros (87%) já ouviu falar em lixo eletrônico, mas um terço (33%) acredita que esse lixo está relacionado ao meio digital,
                        como spam, e-mails, fotos ou arquivos. Para outros 42% dos brasileiros lixo eletrônico são aparelhos eletrônicos e eletrodomésticos quebrados
                        e 3% acreditam que são todos os aparelhos que já viraram lixo, ou seja, apenas os que foram descartados, inclusive aqueles que acabam
                        incorretamente em aterros ou na natureza. A pesquisa também especificou alguns produtos para saber se as pessoas os reconheciam como
                        lixo eletrnico. Mais de 90% acreditam que celulares, smartphones, tablets, notebooks, pilhas e baterias são lixo eletrônico e estão corretos.
                        Houve, no entanto, muitas respostas erradas: 51% não acham que lâmpadas comuns, incandescentes e fluorescentes são lixo eletrônico; 34% acreditam
                        que lanternas não são lixo eletrônico e 37% acreditam que balanças não são lixo eletrônico. Na verdade, todos esses objetos são lixo eletrônico.
                        O conceito de Resíduo de Equipamentos Elétricos e Eletrônicos (REEE) é todo produto elétrico ou eletrônico que é descartado por não ter mais utilidade.
                        Inclui grandes equipamentos como geladeiras, freezers, mquinas de lavar pequenos equipamentos como torradeiras, batedeiras, aspiradores de pó,
                        ventiladores equipamentos de informática como computadores e celulares e pilhas e baterias.
                        O descarte incorreto de lixo eletrônico é considerado um problema, pois os componentes químicos podem ser prejudiciais ao meio ambiente
                        e a saúde humana.
                    </p>


                    <h2 className='Texto_Novo' > 97% do lixo eletrônico da América Latina não é descartado de forma sustentável </h2>

                    <p id='texto_final'>Agência da ONU acredita que total inclui matérias-primas como ouro e metais raros, com valor equivalente a US$ 1,7 bilhão;
                        Uma pesquisa da Organização das Nações Unidas para o Desenvolvimento Industrial, Unido, revela que apenas 3% do lixo eletrônico da América Latina
                        é descartado da forma correta e tratado de uma maneira que respeita o meio ambiente.
                        Segundo a entidade, não há monitoramento dos demais 97%, sendo que muitos materiais contêm ouro e outros metais preciosos e poderiam ser recuperados,
                        com valor equivalente a US$ 1,7 bilhão por ano.

                        De acordo com o relatório, o lixo eletrônico nos 13 países avaliados cresceu 49% entre 2010 e 2019, mas apenas 3% desse material foi coletado e descartado de 
                        forma segura.
                        A Unido explica que as pessoas que reciclam lixo de modo informal muitas vezes acabam fazendo uma seleção e pegando alguns elementos valiosos destes eletrônicos, 
                        mas a maior parte, 97%, é descartada de forma inapropriada.
                        Em 2019, o lixo eletrônico gerado por 206 milhões de pessoas nos países analisados atingiu a marca de 1,3 megatoneladas, sendo que 30% eram plástico.
                        O lixo eletrônico é formado por várias substâncias perigosas e segundo a Unido, nos países analisados, esses materiais têm 2,2 kg de mercúrio, 600 kg de cádmio, 
                        4,4m kg de chumbo e 5,6 megatoneladas de gases de efeito estufa.
                        {/* <span id="tresPontos">...</span><span id="mostrarMais"> */}


                    </p>

                    {/* <button onClick="leiaMais()" id="btnLeiaMais" class="btnLeiaMais">Leia Mais</button> */}


                </section>
            </main>
        </>


    )
}

export default Informativo;