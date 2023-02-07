import { useState } from "react";
import "../../../styles/main/profile/index.css";
import "../../../styles/main/profile/responsiveIndex.css";
import svgnationality from "../../../svg/img/1715795_earth_planet_space_icon.svg";
import svgLocation from "../../../svg/img/location_map_optimization.svg";
import svgEducation from "../../../svg/img/certificates_education.svg";
import svgBriefcase from "../../../svg/img/briefcase_icon.svg";
import svgLearning from "../../../svg/img/education_learning.svg";
import starIcon from '../../../svg/img/star_icon.svg'

import { useSelector } from "react-redux";

const Profile = () => {
  const [stateProfile00] = useState([
    {
      title: "Nacionalidad",
      info: "Chileno",
      svg00: svgnationality,
    },
    {
      title: "Residencia",
      info: "Sexta Región, San Vicente de Tagua Tagua",
      svg00: svgLocation,
    },
    {
      title: "Formación",
      info: "AIEP Téc. Nivel Superior Programación Computacional.",
      svg00: svgEducation,
    },
  ]);
  const [stateProfile01] = useState([
    {
      job: "Estudio fotografico",
      business: "Altom",
      experience: "6 meses",
      tools: ["photoshop"],
    },
    {
      job: "Soporte informatico",
      business: "Supermercado Cugat",
      experience: "1 año 6 meses",
      tools: ["Soporte", "Html5", "Css3", "Javascript"],
    },
    {
      job: "Frontend",
      business: "jumpitt",
      experience: "3 meses",
      tools: [
        "Html5",
        "Css3",
        "Javascript",
        "React.js",
        "Antd",
        "Redux",
        "TypeScript",
        "Git",
        "Jira",
      ],
    },
  ]);

  const [stateProfile02] = useState([
    {
      title: "Actitud positiva",
      svg00: starIcon,
    },
    {
      title: "Resolución de problemas",
      svg00: starIcon,
    },
    {
      title: "Control del estrés",
      svg00: starIcon,
    },
    {
      title: "Perseverancia",
      svg00: starIcon,
    },
    {
      title: " iniciativa",
      svg00: starIcon,
    },
    {
      title: "Creatividad",
      svg00: starIcon,
    },
    {
      title: "Flexibilidad",
      svg00: starIcon,
    },
    {
      title: "Empatía",
      svg00: starIcon,
    },
    {
      title: "Honestidad",
      svg00: starIcon,
    },
    {
      title: "Disciplina",
      svg00: starIcon,
    },
  ]);

  const selector = useSelector((state) => state.scrollReducer);
  console.log(selector);
  return (
    <div id="about" className={`divContainerProfile00 flexColumn`}>
      {/*  <div style={{width:"10rem"}}>{svg().wallpaper00}</div> */}
      <div
        style={selector.profileMovi00}
        className="divContainerProfile03 flexColumn "
      >
        <h1>Acerca de mí</h1>
        <h2>
          <img
            style={{ width: "8rem", height: "8rem", position: "relative" }}
            src={svgBriefcase}
          ></img>
          ||En constante aprendizaje, al igual en busca de dar la mejor
          ilustración, frente a los diferentes desarrollos, tanto desafiantes
          como más ensayados, no me obstaculizo ante la frustración, concuerdo
          en un resultado satisfactorio donde el despliegue y demostración de la
          información tengan el protagonismo.
        </h2>
      </div>
      <div
        style={selector.profileMovi01}
        className="divContainerProfile01 flexRowWrap"
      >
        {stateProfile00.map((listStateProfile) => {
          return (
            <div className="divContainerProfile02 flexColumn">
              <div className="divContainerProfile04">
                <div className="divContainerProfile13"> </div>

                <img
                  style={{
                    width: "5rem",
                    height: "5rem",
                    position: "relative",
                  }}
                  src={listStateProfile.svg00}
                ></img>
              </div>
              <div className="divContainerProfile05">
                {listStateProfile.title}
              </div>
              <div className="divContainerProfile06">
                {listStateProfile.info}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={selector.profileMovi02}
        className="divContainerProfile07 flexColumn"
      >
        <h1>Experiencia laboral</h1>
        {stateProfile01.map((liststateProfile01) => {
          return (
            <div className="flexColumn divContainerProfile08">
              <div className="divContainerProfile09 flexRow">
                <h2>{liststateProfile01.job}</h2>
              </div>
              <div className="divContainerProfile10 flexRow">
                <h2>{liststateProfile01.business}</h2>
              </div>
              <div className="divContainerProfile10 flexRow">
                <h2>{liststateProfile01.experience}</h2>
              </div>
              <div className="divContainerProfile11 flexRowWrap">
                {liststateProfile01.tools.map((list) => {
                  return <h3>{list}</h3>;
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="divContainerProfile14 flexColumn">
        <h1>Aptitudes</h1>

        <div className="divContainerProfile15 ">
          {stateProfile02.map((list) => {
            return <h2><img style={{width:"3rem"}} src={list.svg00}></img> {list.title}</h2>;
          })}
        </div>
      </div>

      <div
        style={selector.profileMovi03}
        className="divContainerProfile12 flexColumn"
      >
        <h1>Aspiraciones</h1>
        <h2>
          <img
            style={{ width: "8rem", height: "8rem" }}
            src={svgLearning}
          ></img>
          Mis aspiraciones profesionales son desarrollar constante aprendizaje,
          para estar siempre preparado y a la vanguardia, en las tecnologías más
          actuales y solicitadas, con el objetivo de perfilar como un
          profesional capaz y adecuado ante cualquier tarea.
        </h2>
      </div>
    </div>
  );
};

export default Profile;
