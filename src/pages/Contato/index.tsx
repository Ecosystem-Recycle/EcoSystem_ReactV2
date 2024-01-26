import './style.css'
import iconeEmail from "../../assets/img/icone_email_footer.png"
import iconeWhatsApp from "../../assets/img/icone_whats_footer.png"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



function Contato() {

    const form:any = useRef();
    const [done, setDone] = useState(false)
    // const [nome, setNome] = useState<string>("")
    // const [email, setEmail] = useState<string>("")
    // const [telefone, setTelefone] = useState<string>("")
    // const [assunto, setAssunto] = useState<string>("")

    function msgFormularioContato(){
        alert('Sua mensagem foi enviada com sucesso.');
      };

      function sendEmail(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        emailjs.sendForm('service_sot9b9w', 'template_newMess', e.currentTarget, 'NvrSMkZ1YOmgWkIBm')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
        e.currentTarget.reset()
    }

    return (
        <>
            <main id='mainContato'>
                <h1>página Contato ecosystem &amp; recycle</h1>
                <section>
                    <div className=" telaContato wrapper">
                        <h2>contato</h2>
                        <form ref={form} onSubmit={ sendEmail }>
                        <div id='idContatoFormulario' className="cardContato flex">
                            
                                <textarea name='nome_usuario' placeholder="Nome Completo" defaultValue={""} />
                                <textarea name='email_usuario' placeholder="E-mail" defaultValue={""} />
                                <textarea name='tel_usuario'placeholder="Telefone" defaultValue={""} />
                                <textarea name="message" placeholder="Assunto" defaultValue={""} />
                            
                            <div className="mensagemContato">
                                <p>
                                    Preencha o formulário ao lado para entrar em contato com a ECO
                                    SYSTEM &amp; RECYCLE!
                                </p>
                                <div className="contatos">
                                    <div className="email flex">
                                        <img src={iconeEmail} alt="" />
                                        <p>contato@ecosystemrecycle.com.br</p>
                                    </div>
                                    <div className="whats flex">
                                        <img src= {iconeWhatsApp} alt="" />
                                        <p>(11) 99999-9999</p>
                                    </div>
                                    <div className="adress">
                                        <p>R. Niterói, 180 - Centro</p>
                                        <p>São Caetano do Sul - SP, 09510-200</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <a href="#">Enviar</a> */}
                        {/* <Link to="/contato" onClick={ msgFormularioContato }>Enviar</Link> */}
                        <button type="submit">Enviar</button>
                        </form>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Contato;