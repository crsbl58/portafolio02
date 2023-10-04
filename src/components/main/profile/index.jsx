import { useState } from "react";
import "../../../styles/main/profile/index.css";
import "../../../styles/main/profile/responsiveIndex.css";
import svgnationality from "../../../svg/img/1715795_earth_planet_space_icon.svg";
import svgLocation from "../../../svg/img/location_map_optimization.svg";
import svgEducation from "../../../svg/img/certificates_education.svg";
import svgBriefcase from "../../../svg/img/briefcase_icon.svg";
import svgLearning from "../../../svg/img/education_learning.svg";
import starIcon from "../../../svg/img/star_icon.svg";

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
      timeExperience: "6 meses",
      experiencepoints: [""],
      tools: ["photoshop"],
    },
    {
      job: "Soporte informatico",
      business: "Supermercado Cugat",
      timeExperience: "2020- 1 año 6 meses",
      experiencepoints: [
        "Responsable de brindar asistencia técnica y soluciones a los problemas informáticos en el Supermercado Cugat",
        "Durante 1 año y 6 meses, ofrecí soporte técnico para garantizar el correcto funcionamiento de los sistemas y equipos de la empresa.",
        "Aproveché los tiempos muertos para adquirir habilidades en desarrollo web.",
        "Adquirí conocimientos en CSS, HTML, JavaScript y PHP durante mi tiempo en la empresa.",
        "Estas habilidades adicionales me permitieron mejorar mi perfil profesional y estar preparado para asumir proyectos de desarrollo web.",
      ],
      tools: ["Soporte", "Html5", "Css3", "Javascript"],
    },
    {
      job: "Frontend",
      business: "jumpitt",
      timeExperience: "2022 - 3 meses",
      experiencepoints: [
        "Durante este tiempo, utilicé una variedad de tecnologías y herramientas, incluyendo JavaScript, React.js, Antd, Redux, TypeScript, Git y Jira.",
        "Utilicé la biblioteca Antd para implementar componentes y diseñar aplicaciones web con una apariencia moderna y estilizada.",
        "Integré el estado de la aplicación utilizando Redux y TypeScript para garantizar un flujo de datos coherente y una mejor mantenibilidad del código.",
        "Colaboré en un entorno colaborativo utilizando Git como sistema de control de versiones.",
        "Participé en la gestión de tareas y seguimiento del proyecto utilizando Jira para mantener un flujo de trabajo eficiente.",
      ],
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
    {
      job: "Full stack",
      business: "matus",
      timeExperience: "2023 - 9 de marzo - 1 de julio",
      experiencepoints: [
        "Estoy participando en un proyecto de desarrollo de una aplicación para una pastelería que registra todos los procesos de elaboración de las tortas, desde su programación hasta la distribución en las sucursales.",
        "En el frontend, utilizo React.js y Next.js para crear una interfaz de usuario atractiva y receptiva.",
        "Sigo el patrón de diseño Atomic Design para una estructura escalable y modular de los componentes de la aplicación.",
        "En el backend, trabajo con Node.js y Express para construir una API robusta y segura.",
        "Me comunico con APIs externas utilizando Axios para realizar solicitudes HTTP y obtener información adicional para la aplicación.",
      ],
      tools: [
        "Sass",
        "React.js",
        "Next.js",
        "Zustand",
        "Atomic Design",
        "Node.js",
        "Express",
        "Mysql",
        "MVC",
        "TypeScript",
        "Socketio",
        "Axios",
        "Git",
      ],
    },
    {
      job: "Full stack",
      business: "Freelancer - Gases ñubles",
      timeExperience: "2023 - 17 de julio - actualidad",
      experiencepoints: [
        "Estoy desarrollando un proyecto de una aplicación para una empresa de reparto y arriendo de cilindros con distintos contenido.",
        "En el frontend, utilizo Next.js para crear una interfaz de usuario atractiva y receptiva.",
        "Sigo el patrón de diseño Atomic Design para una estructura escalable y modular de los componentes de la aplicación.",
        "En el backend, trabajo con Node.js y Express con typescript para construir una API robusta y segura.",
        "su principal funcion, es dar informes de los repartos y estados de los cilindros (vacio, en uso, entregando, entregado, recepcionando, recepcionado), al igual informacion de sus distintos clientes, como fechas y datos revelantes.",
      ],
      tools: [
        "Sass",
        "React.js",
        "Next.js",
        "Zustand",
        "Atomic Design",
        "Node.js",
        "Express",
        "Mysql",
        "MVC",
        "TypeScript",
        "Socketio",
        "Axios",
        "Git",
        "Xlsx",
        "jsonWebToken"
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
                <h2>{liststateProfile01.timeExperience}</h2>
              </div>
              <div className="divContainerProfile16 flexRow">
                {liststateProfile01.experiencepoints.map((list)=>{return<h2>{list}</h2>})}
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
      <div className="divContainerProfile14 flexColumn">
        <h1>Aptitudes</h1>

        <div className="divContainerProfile15 ">
          {stateProfile02.map((list) => {
            return (
              <h2>
                <img style={{ width: "3rem" }} src={list.svg00}></img>{" "}
                {list.title}
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
