import "../../../styles/main/slider/index.css";
import "../../../styles/main/slider/responsiveIndex.css";
import imgSlider00 from "../../../svg/img/slider00.jpg";
import imgSlider01 from "../../../svg/img/slider01.jpg";
import imgSlider02 from "../../../svg/img/slider02.jpg";
import imgSlider03 from "../../../svg/img/slider03.jpg";
import imgSlider04 from "../../../svg/img/slider04.jpg";
import imgSlider05 from "../../../svg/img/slider05.jpg";
import imgSlider06 from "../../../svg/img/calendario.jpg";
import imgSlider07 from "../../../svg/img/chat.jpg";
import imgSlider08 from "../../../svg/img/crud.jpg";
import imgSlider09 from "../../../svg/img/analisisdedatos.jpg";

import { useSelector } from "react-redux";

const Slider = () => {
  const selector = useSelector((state) => state.scrollReducer);

  const CardSlider = ({ url, name, img, info, urlgit }) => {
    return (
      <div className="divContainerSlider05">
        <div className="divContainerSlider04"></div>
        <div className="divContainerSlider02 flexColumn">
          <h2>{name}</h2>
          <div className="divContainerSlider03 flexColumn">{info}</div>
          <button
            onClick={() => {
              window.open(url, "_blank");
            }}
          >
            Deploy
          </button>
          <button
            onClick={() => {
              window.open(urlgit, "_blank");
            }}
          >
            Github
          </button>
          <img src={img}></img>
        </div>
      </div>
    );
  };

  return (
    <div id="templates" className="divContainerSlider00 flexColumn">
      <h1>Paginas</h1>

      <div
        style={selector.sliderMovi00}
        className="divContainerSlider01 flexRowWrap"
      >
        <CardSlider
          numCard={0}
          name={"Portafolio"}
          img={imgSlider00}
          url={"https://portafolio-frontend-drab.vercel.app/"}
          urlgit={"https://github.com/crsbl/portafolioFrontend"}
          info={"Html5, Css3, React.js, TypeScript, Node.js"}
        />
        <CardSlider
          numCard={0}
          name={"Calendario Reserva"}
          img={imgSlider06}
          url={"https://reservas-git-main-crsbl.vercel.app/"}
          urlgit={"https://github.com/crsbl/reservas"}
          info={"Html5, Css3, React.js"}
        />
       {/*    <CardSlider
          numCard={0}
          name={"Chat online"}
          img={imgSlider07}
          url={"https://chat-u4ws.vercel.app/"}
          urlgit={"https://github.com/crsbl/chat"}
          info={"Html5, Css3, React.js, Socketio"}
        /> */}
          <CardSlider
          numCard={0}
          name={"Crud"}
          img={imgSlider08}
          url={"https://crud-flax-zeta.vercel.app/"}
          urlgit={"https://github.com/crsbl/crud"}
          info={"Html5, Css3, React.js"}
        />
          <CardSlider
          numCard={0}
          name={"E-commerce "}
          img={imgSlider08}
          url={"https://e-commerce-delta-lovat.vercel.app/"}
          urlgit={"https://github.com/crsbl/e-commerce"}
          info={"Html5, css3, React.js"}
        />
               <CardSlider
          numCard={0}
          name={"Analisis de ventas "}
          img={imgSlider09}
          url={"https://sales-analysis.vercel.app/"}
          urlgit={"https://github.com/crsbl/SalesAnalysis"}
          info={"Html5, Css3, React.js, Redux"}
        />
        <CardSlider
          numCard={2}
          name={"Maqueta"}
          img={imgSlider02}
          url={"https://test-propulso.vercel.app/#"}
          urlgit={"https://github.com/crsbl/Maqueta00"}
          info={"Html5, Css3"}
        />
        <CardSlider
          numCard={3}
          name={"Clon IMDb"}
          img={imgSlider03}
          url={"https://prueba04.vercel.app/"}
          urlgit={"https://github.com/crsbl/prueba04"}
          info={"Html5, Css3"}
        />
        <CardSlider
          numCard={4}
          name={"Api paises"}
          img={imgSlider04}
          url={"https://datos-pais.vercel.app/"}
          urlgit={"https://github.com/crsbl/InfoPais"}
          info={"Html5, Css3, React.js"}
        />
        <CardSlider
          numCard={5}
          name={"Letrero "}
          img={imgSlider05}
          url={"https://cugat-publicidad-kleg.vercel.app/"}
          urlgit={"https://github.com/crsbl/cugatPublicidad"}
          info={"Html5, Css3, Javascript"}
        />{" "}
        <CardSlider
          numCard={1}
          name={"Api imagenes"}
          img={imgSlider01}
          url={"https://test-seven-psi-61.vercel.app/"}
          urlgit={"https://github.com/crsbl/test"}
          info={"Html5, Css3, Next.js"}
        />
      </div>
    </div>
  );
};

export default Slider;
