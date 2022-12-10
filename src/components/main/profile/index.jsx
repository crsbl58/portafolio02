import { useEffect } from "react";
import { useState } from "react";
import "../../../styles/main/profile/index.css";
import "../../../styles/main/profile/responsiveIndex.css";
import svg from "../../../svg/index";
import { useSelector } from 'react-redux'

const Profile = () => {
  const [stateProfile00] = useState([
    { title: "Nacionalidad", info: "Chileno", svg: svg().icoWorld },
    {
      title: "Residencia",
      info: "Sexta Región, San Vicente de Tagua Tagua",
      svg: svg().icoHome,
    },
    {
      title: "Formación",
      info: "AIEP Téc. Nivel Superior Programación Computacional.",
      svg: svg().icoTraining,
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
  const selector = useSelector((state) => state)

useEffect(()=>{
console.log(selector);

},[])

  return (
    <div className={`divContainerProfile00 flexColumn }`}>
      <div style={selector.profileMovi00} className="divContainerProfile03 flexColumn ">
        <h1>Presentacion</h1>
        <h2>
          ||En constante aprendizaje, al igual en busca de dar la mejor
          ilustración, frente a los diferentes desarrollos, tanto desafiantes
          como más ensayados, no me obstaculizo ante la frustración, concuerdo
          en un resultado satisfactorio donde el despliegue y demostración de la
          información tengan el protagonismo.
        </h2>
      </div>
      <div style={selector.profileMovi01} className="divContainerProfile01 flexRowWrap">
        {stateProfile00.map((listStateProfile) => {
          return (
            <div className="divContainerProfile02 flexColumn">
              <div className="divContainerProfile04" style={{ width: "5rem" }}>
                {listStateProfile.svg}
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
      <div className="divContainerProfile07 flexColumn">
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
    </div>
  );
};

export default Profile;
