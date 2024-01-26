//Import Style
import './style.css'
//Import Swiper Carrousel
import { Swiper, SwiperSlide } from 'swiper/react';
// import Modulos Extras;
import { Keyboard, Autoplay } from 'swiper/modules';
//Import dos Estilos
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';

//Import Imagens
import home_carrousel_bg_banner1 from '../../assets/img/home_carrousel_bg_banner1.jpg'
import home_carrousel_bg_banner2 from '../../assets/img/home_carrousel_bg_banner2.jpg'
import home_carrousel_bg_banner3 from '../../assets/img/home_carrousel_bg_banner3.jpg'
import Home_lixo_eletronico from '../../assets/img/Home_lixo_eletronico.png'
import home_exemplosImg from '../../assets/img/home_exemplosImg.png'
import { Link } from 'react-router-dom';




function PaginaInicial() {
    //Array Contendo todas as imagens do carrousel
    const slides = [
        home_carrousel_bg_banner1,
        home_carrousel_bg_banner2,
        home_carrousel_bg_banner3
    ]
    

    return (
            <main>
                <h1>página home ecosystem & recycle</h1>
                <section className="bannerCarrousel">
                    
                    <Swiper
                        modules = {[Autoplay, Keyboard]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        keyboard = {true}
                    >
                        {slides.map((slide:any, index: number) => (
                            <SwiperSlide key={ index }>
                                <img  src={slide} alt={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="txtBtn_banner">
                        <h2>ECO SYSTEM & </h2>
                        <h2>RECYCLE</h2>
                        <p>A Eco System & Recycle nasceu da necessidade por soluções que acelerem iniciativas de forma rápida e orgânica tornando se empresa de impacto socio ambiental.</p> 
                        {/* <a href="../Tela_Login_Doador/index.html" className="btn_cadastrar">cadastra-se</a> */}
                        <Link className="btn_cadastrar" to="/login">cadastra-se</Link>
                    </div>
                </section>
                <section className="txt_chamativo1">
                    <div className="wrapper">
                        <h3>Encontre pontos de coleta na comodidade da sua casa </h3>
                        <p>Utilize o nosso sistema para encontrar e agendar coletas diretamente com pontos de coletas autorizados ajudando o meio ambiente através da economia circular.</p>
                    </div>
                </section>
                <section className="sobre_O_lixo">
                    <div className="lixo_conteudo wrapper">
                        <div>
                            <h5>
                                Gestão de resíduos eletrônicos. Solucionando o problema do descarte inconciente, sendo o melhor aliado da natureza.
                            </h5>
                            <p>
                                Os equipamentos elétricos e eletrônicos possuem diversos componentes tóxicos em suas estruturas. Se descartados de maneira incorreta, esses resíduos podem contaminar o solo e os lençóis freáticos, colocando em risco a saúde pública.
                            </p>
                            {/* <a href="../TelaInformativo/index.html" className="btn_saibaMais">saiba mais</a> */}
                            <Link to="/informativo" className="btn_saibaMais">saiba mais</Link>
                        </div>
                        <img src={Home_lixo_eletronico} alt="Imagem ilustrativa de uma lixeira com teclados de notebook" />
                    </div>
                </section>

                <section className="doador_parceiro">
                    <div className="conteudo_parceirosDoador wrapper">
                        <div className="cad_doador">
                            <h3>seja um doador</h3>
                            <p>
                                Junte-se a nós no compromisso com a economia circular e sustentável, descartando de forma correta e eficiente com toda a comodidade e confiança que a tecnologia pode oferecer através de parceiros certificados e responsáveis.                    </p>
                            {/* <a href="../Tela_Login_Doador/index.html">
                                cadastre-se
                            </a> */}
                            <Link to="/login">cadastre-se</Link>
                        </div>
                        <div className="cad_parceiro">
                            <h3>seja um parceiro</h3>
                            <p>
                                Utilize o nosso sistema para alavancar e agendar coletas diretamente com consumidores, alterando o final do descarte e ajudando o meio ambiente através da economia circular.
                            </p>
                            {/* <a href="../Tela_Login_Doador/index.html">
                                cadastre-se
                            </a> */}
                            <Link to="/login">cadastre-se</Link>
                        </div>

                    </div>
                </section>

                <section className="Porcentagem_Descarte">
                    <div className="conteudo_porcentagem wrapper">
                        <h3>Na América Latina apenas 3% do lixo eletrônico tem o descarte correto</h3>
                        <p>
                            97% do lixo eletrônico produzido na América Latina não é descartado  corretamente, mesmo podendo conter materiais de alto valor, como ouro e metais, que poderiam ser recuperados, segundo pesquisa da Organização das Nações Unidas (ONU). Apenas 3% tem o descarte correto.
                        </p>
                        <p>
                            O estudo aponta desperdício de US$ 1,7 bilhão ao ano, além dos danos ao meio ambiente. O Brasil é o quinto maior produtor mundial de lixo eletrônico e deve descartar mais de 2,5 milhões de toneladas este ano.
                            A média de reciclagem de eletrônicos no mundo gira em torno de 17%, que é a meta brasileira para 2025, definida no Acordo Setorial – Decreto 10.240/2020.
                        </p>
                        {/* <a href="../TelaInformativo/index.html">leia mais...</a> */}
                        <Link to="/informativo">leia mais...</Link>
                    </div>
                </section>

                <section className="exemplos">
                    <div className="exe_conteudo wrapper">
                        <img src={ home_exemplosImg } alt="Grupo de 9 imagens com exemplos de artes feitas através de materiais 100% aproveitado do descarte" />
                        <div>
                            <h4>Exemplos de Sustentabilidade.</h4>
                            <p>Reciclar é preciso, mas o que podemos fazer com os derivados de produtos eletrônicos que precisam ser jogados fora? Separamos algunsmas ideias pra você dar uma utilidade para seu lixo eletrônico e, de quebra, ajudar a natureza.</p>
                        </div>
                    </div>
                </section>
            </main>
    )
}
export default PaginaInicial;
