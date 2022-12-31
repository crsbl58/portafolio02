const estadoInicial = {
  selectionImg:null,
stateModel:false,
  };
  
  function rootReducer(estado = estadoInicial, accion) {
    console.log(accion);
    switch (accion.type) {
      case "MODEL_IMG":
        return {
          ...estado,
          selectionImg: accion.payload,
        };
        case "MODEL_STATE":
          return {
            ...estado,
            stateModel: accion.payload,
          };
      default:
        return estado;
    }
  }
  export default rootReducer;