import "./linktree.css";

//import fotos
import logo from "./logoDTH.svg";
import Neto from "./Neto.jpg";
import Milena from "./Milena.jpg";
import Pedro from "./Pedro.jpg";
import Thiago from "./Thiago.jpg";
import Junio from "./Junio.jpg";
import Whatsapp from "./whatsapp.png";
import Instagram from "./insta.png";
import Linkedin from "./linkedin.png";
// import Computador from './computador.png';

const Linktree = () => {
  return (
    <div className="linktree-section">
      <div className="container">
        <div className="header">
          <a href="https://www.donutstech.com.br/" alt="Link para o site Donuts Tech" target="__blank">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="titles">
          <h2>Tecnologia com sabor.</h2>
          <h3>Explore o universo Donuts Tech.</h3>
        </div>
        <div className="links">
          <a href="https://wa.me/5534992138816" target="__blank" className="link" alt="Link para entrar em contato com a equipe via WhatsApp">
            <div className="icon">
              <img src={Whatsapp} width={28} height={28} />
            </div>
            <div className="texto">
              <h3>Whatsapp</h3>
            </div>
          </a>

          <a href="https://www.instagram.com/donuts.tech/" className="link" alt="Link para o Instagram da empresa Donuts Tech" target="__blank">
            <div className="icon">
              <img src={Instagram} width={28} height={28} />
            </div>
            <div className="texto">
              <h3>Instagram</h3>
            </div>
          </a>

          <a href="https://www.linkedin.com/company/donutstech/" target="__blank" className="link" alt="Link para o Linkedin da empresa Donuts Tech">
            <div className="icon">
              <img src={Linkedin} width={28} height={28} />
            </div>
            <div className="texto">
              <h3>Linkedin</h3>
            </div>
          </a>
          {/* <a href="#" className="link">
            <div className="icon">
              <img src={Computador} width={28} height={28} />
            </div>
            <div className="texto">
              <h3>Portfólio</h3>
            </div>
          </a> */}
        </div>
        <div className="team">
          <div className="profile">
            <a href="https://wa.me/5534992138816" target="__blank" alt="Link para entrar em contato com Neto via WhatsApp">
              <img src={Neto} alt="Neto" width={52} height={52} />
            </a>
            <span>Neto</span>
          </div>

          <div className="profile">
            <a href="https://wa.me/5511952192009" target="__blank" alt="Link para entrar em contato com Milena via WhatsApp">
              <img src={Milena} alt="Milena" width={56} height={56} />
            </a>
            <span>Milena</span>
          </div>

          <div className="profile">
            <a href="https://wa.me/5534992981863" target="__blank" alt="Link para entrar em contato com Pedro via WhatsApp">
              <img src={Pedro} alt="Pedro" width={56} height={56} />
            </a>
            <span>Pedro</span>
          </div>
        </div>
        <div className="associados">
          <h3>Associados</h3>
          <div className="associados-list">
              <a href="https://wa.me/5511912681826" target="__blank" alt="Link para entrar em contato com Thiago via WhatsApp">
            <div className="associados-item">
                <img src={Thiago} alt="" width={56} height={56} />
                <span>
                  Thiago <br />
                  (Analista de Qualidade)
                </span>
            </div>
              </a>
            <a href="https://wa.me/5534992656418" target="__blank" alt="Link para entrar em contato com Junio via WhatsApp">
              <div className="associados-item">
                <img src={Junio} alt="" width={56} height={56} />
                <span>
                  Júnio <br />
                  (Analista de Infraestrutura)
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
