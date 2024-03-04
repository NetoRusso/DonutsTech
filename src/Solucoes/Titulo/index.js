import style from "./Titulo.module.css";
import simboloOriginal from "../simboloDtOriginal.svg";
import { InView } from "react-intersection-observer";

function Titulo() {
  return (
    <InView>
      {({inView, ref, entry}) => {
        console.log(inView, entry);
        (
        <div ref={ref} className={style.titulo}>
          <img src={simboloOriginal} alt="Simbolo da donuts" />
          <h3>
            Nossas soluções, <br />
            nosso tempero:
          </h3>
        </div>
      )}}
    </InView>
  );
}

export default Titulo;
