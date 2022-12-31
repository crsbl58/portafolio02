const estadoInicial = {
    selectionCard:0,
    };
    
    function rootReducer(estado = estadoInicial, accion) {
      console.log(accion);
      switch (accion.type) {
        case "SELECTION_CARD":
          return {
            selectionCard: accion.payload,
          };
        default:
          return estado;
      }
    }
    export default rootReducer;