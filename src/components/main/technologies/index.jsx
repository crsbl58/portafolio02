import "../../../styles/main/technologies/index.css";
import imgHtml5_00 from "../../../svg/img/html.svg";
import imgCss3_00 from "../../../svg/img/css.svg";
import imgJavascript_00 from "../../../svg/img/js.svg";
import imgReact_00 from "../../../svg/img/react.svg";
import imgNode_00 from "../../../svg/img/node.svg";
import imgExpress_00 from "../../../svg/img/express.svg";
import { useState } from "react";
import { useSelector } from "react-redux";

const Technologies = () => {
  const [stateTechnologies00] = useState([
    { title: "Html5", img: imgHtml5_00 },
    {
      title: "Css3",
      img: imgCss3_00,
    },
    {
      title: "Javascript",
      img: imgJavascript_00,
    },
    {
      title: "React.js",
      img: imgReact_00,
    },
    {
      title: "Node.js",
      img: imgNode_00,
    },
    {
      title: "Express",
      img: imgExpress_00,
    },
  ]);
  const [stateTechnologies01] = useState([
    "mysql",
    "mongodb",
    "git",
    "flexbox",
    "grid",
    "typescript",
    "hooks",
    "context",
    "redux",
    "styled",
    "socketio",
    "reactrouterdom",
  ]);

  const selector = useSelector((state) => state);

  return (
    <div className="divTechnologies00">
      <div style={selector.technologiesMovi00} className="divTechnologies01 flexColumn">
        <h1>Tecnologías</h1>
        <div className="divTechnologies02  flexRowWrap">
          {stateTechnologies00.map((list) => {
            return (
              <div className="divTechnologies03 flexColumn">
                <h4>{list.title}</h4>
                <div className="divTechnologies04">
                  <img className="imgTechnologies00" src={list.img}></img>
                </div>
              </div>
            );
          })}
        </div>
        <div className="divTechnologies05 flexRowWrap">
          {stateTechnologies01.map((list) => {
            return <h2>{list}</h2>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
