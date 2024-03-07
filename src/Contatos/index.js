import { Element } from 'react-scroll';
// import Formulario from './Formulario';
import style from './contatos.module.css';
import Links from './Links';
import detalhe from './malhaPositiva01.svg';
import simbolo from './simbolo_DT_completo_original.svg';
import Esmague from './Esmague';

function Contatos() {
    return(
        <Element name='contatos' className={style.contatos}>
            <div className={style.cabecaTitulo}>
                <span>Entre em contato agora </span>
                <h3>vamos tornar sua marca ainda mais irresistível para o mercado!</h3>
            </div>
            <div className={style.conteudo}>
                {/* <Formulario /> */}
                <div className={style.ajuste}>
                <Esmague />
                <Links />
                </div>
            </div>

            <div className={style.rodape}>
                <p className={style.copy}> <img src={simbolo} alt='simbolo da donuts tech' /> ©️ Todos os direitos reservados- Donuts Tech feitos com muito amor e açucar- CNPJ 53.622.184/0001-98 - 2024</p>
                <img className={style.detalhe} src={detalhe} alt='detalhe de malha' />        
            </div>
    
        </Element>

    )
};

export default Contatos;
