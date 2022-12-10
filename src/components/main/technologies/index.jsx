import "../../../styles/main/technologies/index.css";
import imgHtml5_00 from "../../../svg/img/html.svg";
import imgCss3_00 from "../../../svg/img/css.svg";
import imgJavascript_00 from "../../../svg/img/js.svg";
import imgReact_00 from "../../../svg/img/react.svg";
import imgNode_00 from "../../../svg/img/node.svg";
import imgExpress_00 from "../../../svg/img/express.svg";
import { useState } from "react";

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
    "mysql", "mongodb", "git", "flexbox", "grid", "typescript", "hooks", "context", "redux", "styled",
    "socketio", "reactrouterdom"
  ]);
  return (
    <div className="divTechnologies00 flexColumn">
      <h1>Tecnologías</h1>
      <div className="divTechnologies01  flexRowWrap">
        {stateTechnologies00.map((list) => {
          return (
            <div className="divTechnologies02 flexColumn">
              <h4>{list.title}</h4>
              <div className="divTechnologies03">
                <img className="imgTechnologies00" src={list.img}></img>
              </div>
            </div>
          );
        })}
      </div>
      <div className="divTechnologies04 flexRowWrap">
{stateTechnologies01.map((list)=>{
  return(<h2>{list}</h2>)
})}
      </div>
    </div>
  );
};

export default Technologies;
