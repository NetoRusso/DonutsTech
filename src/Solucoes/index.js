import style from './solucoes.module.css';
import simboloDestaque3 from './donuts_corDestaque3.svg';
import Topico from './Topico';
import simboloDestaque1 from './donuts_corDestaque1.svg';
import simboloDestaque2 from './donuts_corDestaque2.svg';
import simboloDestaque4 from './donuts_corDestaque4.svg';
import simboloEscura from './donuts_corEscura.svg';
import simboloOriginal from './simboloDtOriginal.svg';
import megaFone from './MegaFone.png';





function Solucoes() {
    return (
        <div className={style.conteudo}>
            <div className={style.espaco} />
            <div className={style.titulo}> 
                <img src={simboloOriginal} alt='Simbolo da donuts' />
                <h3> 
                    Nossas soluções, <br/>nosso tempero:
                </h3>
            
            </div>
            <div className={style.espaco} />
            <div className={style.ajuste}>
                <p className={style.texto}>
                    Explore o futuro com a Donuts Tech, onde a tecnologia se funde de maneira única com a comunicação. Oferecemos soluções envolventes que superam as expectativas. Desde nossos notáveis desenvolvimentos em software até uma comunicação digital estratégica, cada serviço é uma manifestação de excelência. Criamos experiências visuais inspiradoras, transformando ideias em realidade.<br />Junte-se à revolução digital com a Donuts Tech, onde o futuro se torna presente.
                </p>
            </div>
            <div className={style.cabecaTech}>
                <img className={style.simboloD3} src={simboloDestaque3} alt='Donuts verde' />
                <h4 className={style.tituloTech}> {`<Tecnologia />`}<div /></h4>
            </div>
            <div className={style.topicos}>
                <ul>
                    <Topico
                        imagem={simboloDestaque4}
                        titulo={`Desenvolvimento sites - Web software`}
                    />
                    <Topico
                        imagem={simboloEscura}
                        titulo={`Consultoria de tecnologia`}
                    />
                    <Topico
                        imagem={simboloDestaque1}
                        titulo={`Aplicativos - Aplicações web - Jogos`}
                    />
                    <Topico
                        imagem={simboloDestaque2}
                        titulo={`UI e UX – Banco de componentes`}
                    />
                    <Topico
                        imagem={simboloDestaque3}
                        titulo={`Domínios - Hospedagem - Manutenção`}
                    />
                </ul>
            </div>

            <div className={style.espaco} />

            <div className={style.cabecaMkt}>
                <img className={style.simboloD4} src={simboloDestaque4} alt='Donuts rosa' />
                <h4 className={style.tituloMkt}> comunicação <span><img src={megaFone} alt='Um Megafone rosa' /></span> </h4>
            </div>

            <div className={style.topicos}>
                <ul>
                    <Topico
                        imagem={simboloDestaque3}
                        titulo={`Branding – Identidade visual`}
                    />
                    <Topico
                        imagem={simboloDestaque1}
                        titulo={`Consultoria e planejamento estratégico`}
                    />
                    <Topico
                        imagem={simboloDestaque2}
                        titulo={`Treinamentos - Palestras`}
                    />
                    <Topico
                        imagem={simboloEscura}
                        titulo={`Agência de comunicação -  Marketing digital`}
                    />
                    <Topico
                        imagem={simboloDestaque4}
                        titulo={`Peças gráficas`}
                    />
                </ul>
            </div>

            <div className={style.espaco} />
        </div>
    )
}

export default Solucoes;
