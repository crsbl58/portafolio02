import svg from "../../../../svg/index";
import "../../../../styles/main/demos/gallery/index.css";
import { useRef,useState } from "react";
import mocks from '../../../../mocks/index';
import logoPdf from "../../../../svg/img/logopdf.png";

/* const Gallery = ({ CompBaseDemo }) => {
  const ContentGallery = () => {
    const refInputFileImg = useRef(null);
    const [stateInput, setstateInput] = useState("");
    const [hookSetStateApp, hookstateApp]= useOutletContext();
    const [stateListGallery, setStateListGallery] = useState([
      {
        name: "empuñadura",
        base64: mocks().img.gallery.img00,
        type: 0,
      },
      {
        name: "pdf",
        base64: mocks().pdf.pdf1,
        type: 1,
      },
    ]);


    return (
      <div className="divContainerGallery00 flexColumn">
        <div className="divContainerGallery01 flexRow">
        <input
            style={{ display: "none" }}
            type="file"
            ref={refInputFileImg}
            name="img"
            accept="image/jpeg, application/pdf"
            onChange={async (event) => {
              const convertBase64 = (file) => {
                return new Promise((resolve, reject) => {
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(file);
                  fileReader.onload = () => {
                    resolve(fileReader.result);
                  };
                  fileReader.onerror = (error) => {
                    reject(error);
                  };
                });
              };
              const file = event.target.files;
              const base64 = await convertBase64(![0]);
              const typeData = base64.slice(5, 15) =="image/jpeg" ? 0 : 1
              stateListGallery.length < 6
                ? setStateListGallery([
                    ...stateListGallery,
                    {
                      name: stateInput,
                      base64: base64,
                      type: typeData,
                    },
                  ])
                : alert("excede el limite de fotografias");
            }}
          ></input>
          <button>Subir Img, Pdf</button>{" "}
          <input
            placeholder="Ingrese titulo"
            onChange={(e) => {
              setstateInput(e.currentTarget.value);
            }}
            value={stateInput}
          ></input>
        </div>
        <div className="divContainerGallery02">
        {stateListGallery.map(({ name, base64, type }, index) => {
            let viewData =
              type === 0
                ? base64
                  ? base64
                  : "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"
                : logoPdf;
            return (
              <div className="divContainerImgGallery00 animationTextStart">
                <h3>{name}</h3>
                <div className="divContainerRevealedRoll">
                  <div className="divContainerImgGallery01">
                    <img src={viewData} className="ImgGalleryViewBase64"></img>
                    <button
                      className="buttonViewImgListGallery"
                      onClick={() => {
                        hookSetStateApp({
                          ...hookstateApp,
                          modelImgPdfStatus: true,
                          base64Img: base64,
                          typeData: type,
                        });
                      }}
                    >
                      Visualizar
                    </button>
                    <button
                      name="asd"
                      className="buttonDeleteImgListGallery"
                      onClick={() => {
                        console.log(index);
                        console.log(stateListGallery);
                        const array = [];
                        for (let i = 0; i < stateListGallery.length; i++) {
                          if (i != index) {
                            array.push(stateListGallery[i]);
                          }
                        }
                        setStateListGallery(array);
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <CompBaseDemo svg={svg().iconGalleryPdf} ComponentDemo={ContentGallery} />
  );
};

export default Gallery; */
