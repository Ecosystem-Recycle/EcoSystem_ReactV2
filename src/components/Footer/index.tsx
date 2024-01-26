import './style.css'

import { Link } from 'react-router-dom';

import icoEmail from "../../assets/img/icone_email_footer.png";
import icoWhats from "../../assets/img/icone_whats_footer.png";
import icoInstagran from "../../assets/img/icone_instagran_footer.png";
import icoFacebook from "../../assets/img/icone_face_footer.png";
import icoTwitter from "../../assets/img/icone_twitter_footer.png";

function Footer() {

  return (
    <footer>
      <div className="div_footerPosition wrapper">
        <div className="foot_contats">
          <div>
            <img
              src={icoEmail}
              alt="Icone de uma carta com um @, simbolizando o email"
            />
            <p>contato@ecosystemrecycle.com.br</p>
          </div>
          <div>
            <img src={icoWhats} alt="Icone do whatsapp" />
            <p>(11) 99999-9999</p>
          </div>
          <div>
            <p>R. Niterói, 180 - Centro</p>
            <p>São Caetano do Sul - SP, 09510-200</p>
          </div>
        </div>
        <div className="foot_menu">
          <span>menu</span>
          <ul>
            <Link to="/"><li>página inicial</li></Link>
            <Link to="/nossahistoria"><li>nossa historia</li></Link>
            <Link to="/informativo"><li>informativo</li></Link>
            <Link to="/servicos"><li>serviços</li></Link>
            <Link to="/duvidas"><li>dúvidas</li></Link>
            <Link to="/contato"><li>contato</li></Link>
          </ul>
        </div>
        <div className="foot_midiasBoletim">
          <span>Boletim Informativo</span>
          <div className="foot_botetim">
            <form >
              <input autoComplete="off" type="email" name="email" placeholder="...Digite seu email" />
            </form>
            <a href="#" className="btn_enviar">
              enviar
            </a>
          </div>
          <div className="ico_sociais">
            <a href="https://www.instagram.com/eco_sytem/">
              <img
                src={icoInstagran}
                alt="Icone do Instagran"
              />
            </a>
            <a href="https://www.facebook.com/">
              <img src={icoFacebook} alt="Icone do Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer;