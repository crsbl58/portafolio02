import "../../../styles/main/demos/index.css";
import svg from "../../../svg/index";
import React, { useState } from "react";
import Crud from "./crud/index";
import Api from "./api/index";
import Chat from "./chat/index";
import Gallery from "./gallery/index";
import Graphics from "./graphics/index";
import Layout from "./layout/index";

const Demos = () => {
  const [stateListDemos] = useState([
    /*     {
      name: "Crud",
      iconComponent: svg().iconGalleryPdf,
      position: 0,
    }, */
/*     {
      name: "Ver img, pdf",
      iconComponent: svg().iconGalleryPdf,
      position: 1,
    }, */
    {
      name: "Conexion Api",
      iconComponent: svg().iconApi,
      position: 2,
    },
    {
      name: "Graficos",
      iconComponent: svg().iconGraphic,
      position: 3,
    },
    {
      name: "Chat público",
      iconComponent: svg().iconChatRoom,
      position: 4,
    },
    {
      name: "Maquetas",
      iconComponent: svg().iconLayout,
      position: 5,
    },
  ]);

  const [stateDemo, setStateDemo] = useState({ state: 2 });

  const BaseDemo = ({ svg, ComponentDemo }) => {
    return (
      <div  className="divContainerDemo02 flexRow">
        <div
          style={{
            width: "5rem",
          }}
        >
          {svg}
        </div>
        <div className="divContainerDemo03">{<ComponentDemo />}</div>
      </div>
    );
  };

  return (
    <div className="divContainerDemos00 flexColumn">
      <h1>Demos</h1>

      <div className="divContainerDemos01 flexRow">
        {stateListDemos.map((list) => {
          return (
            <button
              onClick={() => {
                setStateDemo({ state: list.position });
              }}
              className="btnContainerDemos00 flexColumn"
            >
              {list.name}
            </button>
          );
        })}
      </div>

      {/*  {stateDemo.state === 0 ? <Crud /> : <React.Fragment />} */}
      {/*   {stateDemo.state === 1 ? (
        <Gallery CompBaseDemo={BaseDemo} />
      ) : (
        <React.Fragment />
      )} */}
      {stateDemo.state === 2 ? (
        <Api CompBaseDemo={<BaseDemo />} />
      ) : (
        <React.Fragment />
      )}
      {stateDemo.state === 3 ? (
        <Graphics CompBaseDemo={<BaseDemo />} />
      ) : (
        <React.Fragment />
      )}
      {stateDemo.state === 4 ? (
        <Chat CompBaseDemo={<BaseDemo />} />
      ) : (
        <React.Fragment />
      )}
      {stateDemo.state === 5 ? (
        <Layout CompBaseDemo={<BaseDemo />} />
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default Demos;
