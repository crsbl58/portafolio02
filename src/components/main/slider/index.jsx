import "../../../styles/main/slider/index.css";
import "../../../styles/main/slider/responsiveIndex.css";
import imgSlider00 from "../../../svg/img/slider00.jpg";
import imgSlider01 from "../../../svg/img/slider01.jpg";
import imgSlider02 from "../../../svg/img/slider02.jpg";
import imgSlider03 from "../../../svg/img/slider03.jpg";
import imgSlider04 from "../../../svg/img/slider04.jpg";
import imgSlider05 from "../../../svg/img/slider05.jpg";
import imgSlider06 from "../../../svg/img/calendario.jpg";
import { useSelector } from "react-redux";

const Slider = () => {
  const selector = useSelector((state) => state.scrollReducer);

  const CardSlider = ({ url, name, img, info }) => {

    return (
   <div className="divContainerSlider05" >
      <div className="divContainerSlider04"></div>
      <div
        className="divContainerSlider02 flexColumn"
      >
        <h2>{name}</h2>
        <div className="divContainerSlider03 flexColumn">
{info}
        </div>
        <button
          onClick={() => {
            window.open(url, "_blank");
          }}
        >
          Visitar
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
      className="divContainerSlider01 flexRowWrap">
     
        <CardSlider
          numCard={0}
          name={"Portafolio"}
          img={imgSlider00}
          url={"https://portafolio-frontend-drab.vercel.app/"}
          info={"Html5, css3, React.js, typeScript, node.js"}
        />
              <CardSlider
          numCard={0}
          name={"Calendario Reserva"}
          img={imgSlider06}
          url={"https://reservas-git-main-crsbl.vercel.app/"}
          info={"Html5, css3, React.js"}
        />
        <CardSlider
          numCard={1}
          name={"Api imagenes"}
          img={imgSlider01}
          url={"https://test-seven-psi-61.vercel.app/"}
          info={"Html5, css3, Next.js"}
        />
        <CardSlider
          numCard={2}
          name={"Maqueta"}
          img={imgSlider02}
          url={"https://test-propulso.vercel.app/#"}
          info={"Html5, css3"}
        />
        <CardSlider
          numCard={3}
          name={"Clon IMDb"}
          img={imgSlider03}
          url={"https://prueba04.vercel.app/"}
          info={"Html5, css3"}
        />
        <CardSlider
          numCard={4}
          name={"Api paises"}
          img={imgSlider04}
          url={"https://datos-pais.vercel.app/"}
          info={"Html5, css3, React.js"}
        />
        <CardSlider
          numCard={5}
          name={"Letrero "}
          img={imgSlider05}
          url={"https://cugat-publicidad-kleg.vercel.app/"}
          info={"Html5, css3, javascript"}
        />
      </div>
    </div>
  );
};

export default Slider;
