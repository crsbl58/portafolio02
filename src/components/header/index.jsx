import "../../styles/header/index.css";
import "../../styles/header/responsiveIndex.css";
import svgIllustrations from "../../svg/index.jsx";
import curriculum from "../../pdf/CVCRISTOBALORTEGA.pdf";

import curriculumIco from "../../svg/img/briefcase_icon.svg"
import pcIco from "../../svg/img/develop_development_web_icon.svg"
import { useSelector } from "react-redux";

const Header = () => {
  const selector = useSelector((state) => state.scrollReducer);



  return (
    <header id="home" className="flexColumn">
      <div className="divContainerHeader00 flexRow">
        <div style={selector.homeMovi00} className="divContainerHeader01 flexColumn">
          <h1><img style={{width:"4rem", height:"4rem"}} src={pcIco}></img> Developer</h1>
          <h1>Cristóbal Ortega</h1>
          <h1></h1>
          <a href={curriculum} download>
            <button >Descargar Curriculum</button>
            <image src={curriculumIco}></image>
          </a>
        </div>
        <div className="divContainerHeader02">
          {svgIllustrations().FormalModelPC}
        </div>
      </div>
      <div className="divContainerFooterHeader">
        {svgIllustrations().footerHeader}
      </div>
    </header>
  );
};

export default Header;
