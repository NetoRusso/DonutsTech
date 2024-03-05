import style from "./Titulo.module.css";
import simboloOriginal from "../simboloDtOriginal.svg";
import { useEffect, useRef, useState } from "react";

function Titulo() {
  const ref = useRef(null);
  const [animacaoRight, setAnimacaoRight] = useState(-100)
  const [animacaoRotate, setAnimacaoRotate] = useState(-360);
  const [animacaoOpacity, setAnimacaoOpacity] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      const { top, bottom, height } = ref.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      if ((top) >= 0 && (bottom - 400) <= viewHeight) {
        const ratio = ((viewHeight - (top)) / (height + viewHeight));
        const limite = Math.min(Math.max((ratio + 0.40), 0), 1);
        setAnimacaoRight(((limite-1)*100))
        setAnimacaoRotate(((limite)*1080))
        setAnimacaoOpacity(limite === 1 ? 1 : 0)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {

      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <div ref={ref} className={style.titulo} style={{right: `${animacaoRight}vw`}}>
        <img src={simboloOriginal} alt="Simbolo da donuts" style={{rotate: `${animacaoRotate}deg`}} />
        <h3 style={{opacity: `${animacaoOpacity}`}}>
          Nossas soluções, <br />
          nosso tempero:
        </h3>
      </div>
    </>
  );
}

export default Titulo;
