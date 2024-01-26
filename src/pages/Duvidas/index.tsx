import { useState } from 'react';
import './style.css'
import CardDuvidas from '../../components/CardDuvidas';


function Duvidas() {
    const [perguntas, setPerguntas] = useState<any[]>([
        {
            questao: "Como faço para agendar a coleta?",
            resp: "Faça o cadastro em nosso site, informando seus dados de endereço completo, relação de itens que precisa fazer o descarte e foto dos materiais e programe o dia e hora para que um coletor parceiro faça a retirada.",
            id: 1
        },
        {
            questao: "Posso descartar qualquer tipo de lixo eletrônico?",
            resp: "Sim, você poderá descartar qualquer material que seja considerado um lixo eletrônico, tais como: monitor de computador, notebook, telado, mouse, televisor (de tubo ou modelos atuais), celulares, pilhas e baterias, carcaças de eletrônicos, placas eletrônicas e etc.",
            id: 2
        },
        {
            questao: "Os materiais que não se encaixarem na categoria de eletrônicos, podem ser descartados juntamente com os itens que são considerados lixo eletrônico?",
            resp: "Sim, nosso coletor parceiro também poderá retirar o lixo que não se encaixe na categoria de eletrõnico, porém é importante que você detalhe as informações dos itens, além de fotos e quantidade. Caso nenhum produto seja um lixo eletrônico, te ajudamos a encontrar um local para o decarte correto.",
            id: 3
        },
        {
            questao: "O que acontece com o material coletado?",
            resp: "Gerenciamos o lixo para que 100% dos equipamentos coletados sejam reaproveitados, reincorporados ao ciclo produtivo e ao reúso, dentro e fora de nossa empresa. Trabalhamos de forma profissional, em nosso processo nada é desperdiçado.",
            id: 4
        },
        {
            questao: "Por que devemos reciclar o lixo eletrônico?",
            resp: "Os equipamentos elétricos e eletrônicos possuem diversos componentes tóxicos em suas estruturas. Se descartados de maneira incorreta, esses resíduos podem contaminar o solo e os lençóis freáticos, colocando em risco a saúde pública.",
            id: 5
        },
        {
            questao: "Como funciona o horário do agendamento?",
            resp: "Trabalhamos de segunda á sexta em horário comercial (8 ás 17h) e especial (18 ás 22h). Devido a demanda diária fica díficil precisar horários para retirada, por conta da região e quantidade de materiais algumas coletas podem demorar mais que outras.",
            id: 6
        },
        {
            questao: "Como fazer a separação de pilhas e bateriais para o descarte?",
            resp: "As pilhas e baterias também entram na categoria de resíduos eletrônicos e devem ser descartadas em locais específicos e adequados. Ou seja, elas não podem ser descartadas nem no lixo comum, nem no reciclável. Para quem não sabe, no Brasil já é lei a logística reversa e fabricantes e revendedores são obrigados a instalar pontos de coleta para a população. Mas caso não encontre nenhum ponto adequado de descarte, a dica então é separar esses resíduos, de preferência em uma caixa ou um saquinho, onde elas não tenham contato com os demais resíduos, e deixar separado para quando o coletor parceiro retirar.",
            id: 7
        },
        {
            questao: "Como irei identificar a equipe na retirada?",
            resp: "Nossos coletores parceiros irão fazer a indentificação pela notificação que você recebeu e deverá confrontar os dados no seu aplicativo. Após a confirmação do agendamento, informaremos todos os dados do veículo, nome do motorista e ajudante para sua segurança.",
            id: 8
        },
        {
            questao: "A empresa segue o protocolo de cuidados contra o COVID-19?",
            resp: "Sim, nossos coletores parceiros seguem rigorosamente os cuidados contra a covid 19. Todos estão equipados com mascaras, luvas e álcool em gel.",
            id: 9
        },
        {
            questao: "O que é a Logísica Reversa dos Eletrônicos?",
            resp: "A logística reversa é um instrumento que direciona as embalagens e materiais pós-consumo para a reciclagem ou geração de energia. Dessa forma, aquilo que seria descartado e traria um impacto extremamente negativo para o meio ambiente e para a sociedade em geral, vai poder trazer um retorno positivo para a sociedade e até mesmo para a empresa. Esses materiais são destinados para cooperativas de reciclagem (aqui entra a Eletro Recicle) e estas realizam a triagem e definem o destino final do material. Ele pode seguir para a reciclagem ou para a geração de energia, podendo retornar para o ciclo produtivo da indústria.",
            id: 10
        },
        {
            questao: "A Eco Sysem &amp; Recycle faz coleta na minha região?",
            resp: "Cobrimos a capital de São Paulo e regiões como: Grande ABC, Guarulhos, Itaquaquecetuba, Atibaia, Mogi das Cruzes, Suzano Arujá, Entre outras.", 
            id: 11
        }

    ]);

     // Função Esconder Menus -> DUVIDAS
     const [active, setActive] = useState<any>(false);

     const handleToggle = () => {
         setActive(!active);
     };

    

    return (
            <main id='mainDuvidas'>
                <h1>página dúvidas ecosystem &amp; recycle</h1>
                <section>
                    <div className="menu_Direito wrapper">
                        <div className="title wrapper">
                            <h2>Dúvidas</h2>
                            <p>
                                Aqui você encontra respostas paras as principais dúvidas sobre a
                                reciclagem. Para tirar dúvidas ou fazer reclamações, entre em contato
                                com a central da Eco System &amp; Recycle: (11) 99999-9999.
                            </p>
                        </div>
                        <div>
                            <div className="margem_Conteudo wrapper">
                                <div className="Conteudo">
                                    <div className="faqs-container">
                                        { perguntas.map((pergunta:any) => {
                                            return <div className="faq" key={pergunta.id}>
                                                <CardDuvidas 
                                                    pergunta={ pergunta.questao }
                                                    resposta={ pergunta.resp }
                                                />
                                            </div>
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Duvidas;                         