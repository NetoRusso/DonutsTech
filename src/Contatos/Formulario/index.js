import style from './formulario.module.css';

function Formulario() {
    return(
        <form className={style.formulario}>
            <label htmlFor='nome'>
                <input required name='nome' id='nome' type='text' className={style.text} placeholder='Me diga o seu nome' />
            </label>
            <label htmlFor='telefone'>
                <input required name='telefone' id='telefone' type='tel' className={style.text} placeholder='O seu melhor numero' />
            </label>
            <label htmlFor='e-mail'>
                <input name='e-mail' id='e-mail' type='email' className={style.text} placeholder='E o seu melhor email' />
            </label>
            <label htmlFor='mensagem'>
                <textarea name='mensagem' id='mensagem' className={style.mensagem} placeholder='Me conte tudo não me esconda nada' />
            </label>
            <label htmlFor='submit' className={style.labelBotao}>
                <button name='submit' className={style.botao}>Enviar</button>
            </label>

        </form>
    )
};

export default Formulario;
