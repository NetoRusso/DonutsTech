/* eslint-disable jsx-a11y/anchor-has-content */
import style from './links.module.css';


function Links() {
    return (
        <section className={style.links}>
            <div className={style.redes} >
                <div>
                        <h5>@DonutsTech</h5>
                    <a
                        href='https://www.youtube.com/@DonutsTech'
                        target='_blank' rel="noopener noreferrer"
                    ><div className={style.youtube}/></a>
                </div>

                <div>
                    <h5>@donuts.tech</h5>
                    <a  
                        href='https://instagram.com/donuts.tech'
                        target='_blank' rel="noopener noreferrer"
                    ><div className={style.instagram} /></a>
                </div>

                <div>
                    <h5>Donuts Tech</h5>
                    <a 
                        href='https://linkedin.com/company/donutstech'
                        target='_blank' rel="noopener noreferrer"
                    ><div className={style.linkedin} /></a>
                </div>

                <div>
                    <h5>Donuts Tech</h5>
                    <a 
                        href='https://behance.net/donutstech'
                        target='_blank' rel="noopener noreferrer"
                        ><div className={style.behance} /></a>
                </div>

                <div>
                    <h5>contato@donutstech.com.br</h5>
                    <a 
                        href='mailto:contato@donutstech.com.br'
                        target='_blank' rel="noopener noreferrer"
                        ><div className={style.email} /></a>
                </div>

                <div>
                    <h5>+55(34)99983-1153</h5>
                    <a  
                        href='https://wa.me/5534999831153'
                        target='_blank' rel="noopener noreferrer"
                        ><div className={style.whatsapp} /></a>
                </div>

            </div>
        </section>
    )
}

export default Links;
