import './sobre.css'
import Card from './Card';
import imgMissao from './simbolo_destaque1.svg';
import imgVisao from './simbolo_destaque4.svg';
import imgValores from './simbolo_destaque3.svg';
import { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';





function Sobre() {

    const ref = useRef()

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 console.log('entrou');
    //                 entry.target.classList.add('show');
    //             } else {
    //                 entry.target.classList.remove('show');
    //             }
    //         });
    //     });

    //     if (ref.current) {
    //         observer.observe(ref.current);
    //     }

    //     return () => {
    //         if (ref.current) {
    //             // eslint-disable-next-line react-hooks/exhaustive-deps
    //             observer.unobserve(ref.current);
    //         }
    //     };
    // }, []);


    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            entry.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }

            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);





    return (
        <Element name='sobre' className='conteudoTotal'>
            <h4 className='titulo'>
                Junte-se a nós nessa deliciosa jornada, onde a inovação e
                a excelência se encontram para elevar o potencial do seu negócio!
            </h4>
            <p className='paragrafo'>
                A Donuts Tech une tecnologia e design em uma jornada emocionante. Com expertise em artes visuais e software, destacamo-nos como uma força inovadora, integrando criatividade e tecnologia. Além de ser uma empresa de tecnologia, somos facilitadores de comunicação, criando layouts responsivos que maximizam o potencial do seu negócio.
                Na Donuts Tech, misturamos inovação, cuidado artesanal e precisão técnica para criar obras-primas digitais que encantam e inspiram.
            </p>

            <div className='cards hidden' ref={ref}>


                <Card
                    MVV="missao"
                    texto="Descomplicar o digital é a nossa missão, tornar projetos web e comunicação acessíveis, inovadores e feitos sob medida."
                    titulo='Nossa missão'
                    imagem={imgMissao}
                />



                <Card
                    MVV="visao"
                    texto="Ser a referência em software e comunicação entregando soluções inovadoras com excelência e confiabilidade, construindo relações sólidas e duradouras com os clientes."
                    titulo='Nossa visão'
                    imagem={imgVisao}
                />



                <Card
                    MVV="valores"
                    texto={<>Conhecimento<br />Criatividade<br />Diversão<br />Inovação<br />Comprometimento</>}
                    titulo='Nossos valores'
                    imagem={imgValores}
                />




            </div>
        </Element>

    );
}

export default Sobre
