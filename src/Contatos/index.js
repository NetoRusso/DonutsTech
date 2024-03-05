import { Element } from 'react-scroll';
import Formulario from './Formulario';
import style from './contatos.module.css';
import Links from './Links';
import detalhe from './malhaPositiva01.svg';

function Contatos() {
    return(
        <Element name='contatos' className={style.contatos}>
            <div className={style.cabecaTitulo}>
                <span>Entre em contato agora </span>
                <h3>vamos tornar sua marca ainda mais irresistível para o mercado!</h3>
            </div>
            <div className={style.conteudo}>
                <Formulario />
                <Links />
            </div>
            {/* <div className={style.rodape} /> */}
            <img className={style.detalhe} src={detalhe} alt='detalhe de malha' />
            {/* <div className={style.espaco} /> */}
        
    
            <div className={style.espaco} />
        </Element>

    )
};

export default Contatos;
