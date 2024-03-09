import { useState } from 'react';
import style from './formulario.module.css';
import emailjs from '@emailjs/browser';

function Formulario() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    function enviarEmail(e) {
        e.preventDefault();

        const templateParams = {
            from_name: nome,
            message: mensagem,
            from_telefone: telefone,
            email: email
        }

        emailjs.send("service_ofpixxp", "template_0pzsg46", templateParams, "xuwtPWzpqa0qjyxi8")
        .then( (response) => {
            console.log('Email enviado', response.status, response.text)

            setNome('')
            setTelefone('')
            setEmail('')
            setMensagem('')
        }, (error) => {
            console.log('Erro', error)
        } )
    }

    return (
        <form className={style.formulario} onSubmit={enviarEmail}>
            <label htmlFor='nome'>
                <input required name='nome' id='nome' type='text' onChange={(e) =>setNome(e.target.value)} className={style.text} value={nome} placeholder='Me diga o seu nome' />
            </label>
            <label htmlFor='telefone'>
                <input required name='telefone' id='telefone' type='tel' onChange={(e) =>setTelefone(e.target.value)} className={style.text} value={telefone} placeholder='O seu melhor numero' />
            </label>
            <label htmlFor='email'>
                <input required name='email' id='email' type='email' onChange={(e) =>setEmail(e.target.value)} className={style.text} value={email} placeholder='E o seu melhor email' />
            </label>
            <label htmlFor='mensagem'>
                <textarea name='mensagem' id='mensagem'  onChange={(e) =>setMensagem(e.target.value)} className={style.mensagem} value={mensagem} placeholder='Me conte tudo não me esconda nada...' />
            </label>
            <label htmlFor='submit' className={style.labelBotao}>
                <button name='submit' className={style.botao}
                >Enviar</button>
            </label>

        </form>
)};

export default Formulario;
