import { useCallback, useEffect } from 'react';
import style from './esmague.module.css';
import { useState } from 'react';
import mask1 from './mask1.svg';
import mask2 from './mask2.svg';
import mask3 from './mask3.svg';
import mask4 from './mask4.svg';
import mask5 from './mask5.svg';
import quebrar from './quebrou.mp3';
import quebrou from './quebrou3.ogg';
import bater from './batendo2.mp3'
import simboloDt from './simbolo_DT_completo_original.svg';





function Esmague() {

    const [numeroSecreto, setNumeroSecreto] = useState();
    const [clicks, setClicks] = useState(0);
    const [mask, setMask] = useState(`${mask1}`);
    const [cor, setCor] = useState('--cor-escura');
    const [etapa, setEtapa] = useState(1)
    const [pe1, setPe1] = useState(`${style.n1}`);
    const [pe2, setPe2] = useState(`${style.n2}`);
    const [pe3, setPe3] = useState(`${style.n3}`);
    const [txt, setTxt] = useState(`${style.textoN}`)
    const [btn, setBtn] = useState(`${style.reiniciarN}`)


    const cores = ['--cor-escura', '--cor-destaque1', '--cor-destaque3', '--cor-destaque2', '--cor-destaque4']
    const quebra = new Audio(quebrar)
    const acabou = new Audio(quebrou)
    const bate = new Audio(bater)



    function reseta() {
        setClicks(0);
        setMask(`${mask1}`);
        setEtapa(1);
        setPe1(`${style.n1}`);
        setPe2(`${style.n2}`);
        setPe3(`${style.n3}`);
        setTxt(`${style.textoN}`);
        setBtn(`${style.reiniciarN}`);
        gerarNumeroAleatorio();
    }

    function imprimeResultado() {
        document.getElementById('aquiNumero').innerText = `${numeroSecreto}`
    }

    function sorteiaCor() {

        return parseInt(Math.random() * (0 - 4 - 1) + (4 + 1));
    }

    useEffect(() => {
        setNumeroSecreto(gerarNumeroAleatorio())
    }, [])
    const menorValor = 10;
    const maiorValor = 100;
    // const numeroSecreto = gerarNumeroAleatorio();

    function gerarNumeroAleatorio() {
        return parseInt(Math.random() * (menorValor - maiorValor - 1) + (maiorValor + 1));
    };
    console.log('o número secreto é :', numeroSecreto, clicks);

    function mudarDonuts(clicou, secreto) {
        const meta = clicou / secreto;
        const corNumero = sorteiaCor()
        console.log(meta, clicou, secreto)

        if (meta >= 0.25 && meta < 0.5 && etapa === 1) {
            setMask(`${mask2}`)
            setCor(cores[corNumero])
            quebra.play()
            setPe2(`${style.s2}`)
            setEtapa(2)

        }
        if (meta >= 0.5 && meta < 0.75 && etapa === 2) {
            setMask(`${mask3}`)
            setCor(cores[corNumero])
            quebra.play()
            setPe2(`${style.s1}`)
            setEtapa(3)
        }
        if (meta >= 0.75 && meta < 1 && etapa === 3) {
            setMask(`${mask4}`)
            setCor(cores[corNumero])
            quebra.play()
            setPe2(`${style.s3}`)
            setEtapa(4)
        }
        if (meta === 1 && etapa === 4) {
            setMask(`${mask5}`)
            setCor(cores[corNumero])
            acabou.play()
            imprimeResultado()
            setTxt(`${style.textoWin}`)
            setBtn(`${style.reiniciarWin}`);
            setEtapa(5)
        }
    }

    return (
        <section className={style.esmague} >
            <h3>Esmague esse Donuts <div /></h3>


            <h2 className={`${txt}` } >Você esmagou esse donuts!<br/> foram <span id='aquiNumero'> </span> porradas</h2>
            <div className={style.jogo}
                id='jogo'

                onClick={() => {
                    const clicou = clicks + 1
                    if ((clicou) <= numeroSecreto) {
                        mudarDonuts(clicou, numeroSecreto);
                        bate.play()
                        setClicks(clicou)
                    }}}
            
            >
                <div className={style.donut} style={{
                    backgroundColor: `var(${cor})`,
                    maskImage: `url(${mask})`

                }} 
                    // onClick={() => {
                    // const clicou = clicks + 1
                    // if ((clicou) <= numeroSecreto) {
                    //     mudarDonuts(clicou, numeroSecreto);
                    //     bate.play()
                    //     setClicks(clicou)
                    // }}}
                     />

                
                <div className={style.ajuste}>
                    <div className={pe1} style={ {backgroundColor: `var(${cor})`}}/>
                    <div className={pe2} style={ {backgroundColor: `var(${cor})`}}/>
                    <div className={pe3} style={ {backgroundColor: `var(${cor})`}}/>
                </div>

            </div>

            <button className={`${btn}`} onClick={ () => reseta()} >mais um Donuts<img src={simboloDt} alt='simbolo da logo da Donuts Tech' /></button>
        </section>
    )

};

export default Esmague;
