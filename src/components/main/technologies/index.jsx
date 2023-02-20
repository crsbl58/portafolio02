import "../../../styles/main/technologies/index.css";
import "../../../styles/main/technologies/responsiveIndex.css";

import imgCss3_00 from "../../../svg/img/css-3.svg";
import imgJavascript_00 from "../../../svg/img/javascript-1.svg";
import imgReact_00 from "../../../svg/img/react-2.svg";
import imgNode_00 from "../../../svg/img/nodejs-icon.svg";
import imgExpress_00 from "../../../svg/img/express.svg";

import imgHtml5_00 from "../../../svg/img/html-1.svg";

import svg from "../../../svg/index";
import { useState } from "react";
import { useSelector } from "react-redux";

const Technologies = () => {


  const [stateTechnologies00] = useState([
    { title: "Html5", img00: imgHtml5_00, img01: svg().html5Background },
    {
      title: "Css3",
      img00: imgCss3_00,
      img01: svg().css3Background,
    },
    {
      title: "Javascript",
      img00: imgJavascript_00,
      img01: svg().jsBackground,
    },
    {
      title: "React.js",
      img00: imgReact_00,
      img01: svg().reactBackground,
    },
    {
      title: "Node.js",
      img00: imgNode_00,
      img01: svg().nodeBackground,
    },
    {
      title: "Express",
      img00: imgExpress_00,
      img01: svg().expressBackground,
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
    "react-scroll"
  ]);

  const selector = useSelector((state) => state.scrollReducer);

  return (
      <div id="technologies" className="divTechnologies00">
        <div
          style={selector.technologiesMovi00}
          className="divTechnologies01 flexColumn"
        >
          <h1>Skills</h1>
          <div className="divTechnologies02  flexRowWrap">
            {stateTechnologies00.map((list) => {
              return (
                <div className="divTechnologies03 flexColumn">
                  <h4>{list.title}</h4>
                  <div className="divTechnologies04">
                    <img className="imgTechnologies00" src={list.img00}></img>
                 {/*    <div>{list.img01}</div> */}
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
