import style from "./menu.module.css";
import { useMediaQuery } from "react-responsive";
import { Element, Events, Link } from "react-scroll";
import logo from "./logoDtMenu.svg";

function Menu() {
  const mobile = useMediaQuery({ maxWidth: 850 });
  const scrollY = Events.scrollEvent.register();

  console.log(scrollY);

  return (
    <>
      {mobile ? (
        <Element
          onSroll={(e) => {
            console.log(`Scroll vertical: ${e.target.scrollTop}`);
            console.log(`Scroll horizontal: ${e.target.scrollLeft}`);

            if (e.deltaY > 0) {
              console.log("Scroll para baixo");
            } else if (e.deltaY < 0) {
              console.log("Scroll para cima");
            }
          }}
        >
          <img className={style.teste} src={logo} alt="" />
          <p>{scrollY}</p>
        </Element>
      ) : (
        <>
          <nav className={style["nav-desk"]}>
            <ul>
              <li>
                <Link
                  to="sobre"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass={style.active}
                >
                  Um pouco mais de nós
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  to="solucoes"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass={style.active}
                >
                  Nosso menu
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  to="contatos"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass={style.active}
                  offset={-50}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Menu;
