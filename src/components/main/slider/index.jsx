import "../../../styles/main/slider/index.css";
import "../../../styles/main/slider/responsiveIndex.css";
import imgSlider00 from "../../../svg/img/slider00.jpg";
import imgSlider01 from "../../../svg/img/slider01.jpg";
import imgSlider02 from "../../../svg/img/slider02.jpg";
import imgSlider03 from "../../../svg/img/slider03.jpg";
import imgSlider04 from "../../../svg/img/slider04.jpg";
import imgSlider05 from "../../../svg/img/slider05.jpg";
import { useDispatch, useSelector } from "react-redux";

const Slider = () => {
  const selector = useSelector((state) => state.scrollReducer);

  const CardSlider = ({ url, name, img }) => {

    return (
      <div
        className="divContainerSlider02 flexColumn"
      >
        <h2>{name}</h2>
        <button
          onClick={() => {
            window.open(url, "_blank");
          }}
        >
          Visitar
        </button>
        <img src={img}></img>
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
        />
        <CardSlider
          numCard={1}
          name={"template"}
          img={imgSlider01}
          url={"https://test-seven-psi-61.vercel.app/"}
        />
        <CardSlider
          numCard={2}
          name={"template"}
          img={imgSlider02}
          url={"https://test-propulso.vercel.app/#"}
        />
        <CardSlider
          numCard={3}
          name={"template"}
          img={imgSlider03}
          url={"https://prueba04.vercel.app/"}
        />
        <CardSlider
          numCard={4}
          name={"template"}
          img={imgSlider04}
          url={"https://datos-pais.vercel.app/"}
        />
        <CardSlider
          numCard={5}
          name={"template "}
          img={imgSlider05}
          url={"https://cugat-publicidad-kleg.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Slider;
