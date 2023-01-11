import "../../styles/nav/index.css";
import "../../styles/nav/responsiveIndex.css";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <nav>
      <ul className="flexRowWrap">
        <li>
          <Link containerId="containerApp" to="home" spy={true} smooth={true} >
            Inicio
          </Link>
        </li>
        <li>
          <Link containerId="containerApp" to="about" spy={true} smooth={true}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link containerId="containerApp" to="technologies" spy={true} smooth={true}>
            Tecnologias
          </Link>
        </li>
        <li>
          <Link containerId="containerApp" to="templates" spy={true} smooth={true}>
            Paginas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
