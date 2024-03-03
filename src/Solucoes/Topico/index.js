import style from './topico.module.css';


function Topico({imagem, titulo}) {
    return(
        <li className={style.topico}>
            <img src={imagem} alt='donuts de enfeite' />
            <p>{titulo}</p>
        </li>
    )
}

export default Topico;
