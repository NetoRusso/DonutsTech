import style from'./card.module.css';

function Card({MVV, texto, imagem, titulo}) {
    return (
        <div className={style.container}>
            <div className={style.cabeca}>
                <h3 className={style.titulo}>{titulo}</h3>
                <img src={imagem} alt={`imagem de um donuts representando o ${titulo}`}/>
            </div>
            <div className={`${style[`card`]} ${style[`${MVV}`]}`}>
                <p className={`${style[`texto`]} ${style[`texto_${MVV}`]}`}>{texto}</p>
            </div>
        </div>
    )
}


export default Card;
