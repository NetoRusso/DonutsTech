import './banner.css';
import logo from './logoDTH.svg';
import Donuts from'../donuts';

function Banner() {
    return(
        <div className='banner'>
            <div className='containner' />
            <div className='conteudo'>
                <div>
                <img className='logo' src={logo} alt='logo da donuts tech' />
                    <div className='textos'>
                        <h2 className='chamada'>O<span className='destaque1'> Marketing</span> que dá água na boca e <br/>a 
                        <span className='destaque2'> Tecnologia</span> que faz piruetas!<span><Donuts /></span></h2>
                    </div>          
                </div>
                    <button className='botao'> Conte com a gente</button> 
            </div>
        </div>
    )

};


export default Banner