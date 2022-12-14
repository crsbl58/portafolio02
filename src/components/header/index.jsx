import "../../styles/header/index.css";
import "../../styles/header/responsiveIndex.css";
import cssIllustrations from "../../svg/index.jsx";
import curriculum from "../../pdf/CVCRISTOBALORTEGA.pdf";

const Header = () => {
  return (
    <header className="flexColumn">
      <div className="divContainerHeader00 flexRow">
        <div className="divContainerHeader01 flexColumn">
          <h1>Developer</h1>
          <h1>Cristóbal Ortega</h1>
          <h1></h1>
          <a href={curriculum} download>
            <button >Descargar Curriculum  </button>
          </a>
         
        </div>
        <div className="divContainerHeader02">
          {cssIllustrations().FormalModelPC}
        </div>
      </div>
      <div className="divContainerFooterHeader">
        {cssIllustrations().footerHeader}
      </div>
    </header>
  );
};

export default Header;
