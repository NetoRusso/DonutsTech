import Formulario from './Formulario';
import style from './contatos.module.css';

function Contatos() {
    return(
        <section className={style.contatos}> 
            <div className={style.cabecaTitulo}>
                <span>Entre em contato agora </span>
                <h3>vamos tornar sua marca ainda mais irresistível para o mercado!</h3>
            </div>
            <div className={style.conteudo}>
                <Formulario />
            </div>
            <div className={style.espaco} />
        </section>
    
    )
};

export default Contatos;