import style from './links2.module.css';



function Links2() {
    return (
        <section className={style.links}>

            {/* <div className={style.contatos}>
                <div>
                    <h5 className={style.emailTitulo}>contato@donutstech.com.br</h5>
                    <a
                        href='mailto:contato@donutstech.com.br'
                        target='_blank' rel="noopener noreferrer">
                        <div className={style.email} />
                    </a>
                </div>
                <div>
                    <h5 className={style.wppTitulo}>(34)9.9983-1153</h5>
                    <a
                        href='https://wa.me/5534999831153'
                        target='_blank' rel="noopener noreferrer">
                        <div className={style.wpp} />
                    </a>
                </div>

            </div> */}

            <div className={style.redes}>
                <a
                    href='https://wa.me/5534999831153'
                    target='_blank' rel="noopener noreferrer">
                    <div className={style.wpp} />
                </a>
                <a
                    href='mailto:contato@donutstech.com.br'
                    target='_blank' rel="noopener noreferrer">
                    <div className={style.email} />
                </a>
                <a
                    href='https://instagram.com/donuts.tech'
                    target='_blank' rel="noopener noreferrer">
                    <div className={style.instagram} />
                </a>
                <a
                    href='https://linkedin.com/company/donutstech'
                    target='_blank' rel="noopener noreferrer">
                    <div className={style.linkedin} />
                </a>
                <a
                    href='https://behance.net/donutstech'
                    target='_blank' rel="noopener noreferrer">
                    <div className={style.behance} />
                </a>
                {/* <a
                    href='https://www.youtube.com/@DonutsTech'
                    target='_blank' rel="noopener noreferrer">
                    <div className={style.youtube} />
                </a> */}
                
            </div>

        </section>
    )
}

export default Links2;
