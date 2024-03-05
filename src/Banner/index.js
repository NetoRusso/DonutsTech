import "./banner.css";
//import logo from './logoDTH.svg';
import Donuts from "../donuts";
import logoClara from "./LogoDtClara.svg";
import { Link } from "react-scroll";

function Banner() {
  return (
    <div className="banner">
      <div className="containner" />
      <div className="elementos"></div>
      <div className="conteudo">
        <div>
          <img className="logo" src={logoClara} alt="logo da donuts tech" />
          <div className="textos">
            <h2 className="chamada">
              O<span className="destaque1"> Marketing</span> que dá água na boca
              e <br />a<span className="destaque2"> Tecnologia</span> que faz
              piruetas!
              <span>
                <Donuts />
              </span>
            </h2>
          </div>
        </div>
        <Link
          className="botao"
          to="contatos"
          smooth={true}
          duration={500}
          spy={true}
          offset={-50}
        >
          {" "}
          Conte com a gente{" "}
        </Link>
      </div>
    </div>
  );
}

export default Banner;
