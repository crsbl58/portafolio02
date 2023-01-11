const estadoInicial = {
    profileMovi00: { filter: "blur(.0rem)",opacity: 1, transform: "translate(0rem, 0rem)" },
    profileMovi01: { filter: "blur(.0rem)",opacity: 1, transform: "translate(0rem, 0rem)" },
    profileMovi02: { filter: "blur(.0rem)",opacity: 1, transform: "translate(0rem, 0rem)" },
    profileMovi03: { filter: "blur(.0rem)",opacity: 1, transform: "translate(0rem, 0rem)" },
    technologiesMovi00: { filter: "blur(.0rem)",opacity: 1, transform: "translate(0rem, 0rem)" },
  };
  
  function rootReducer(estado = estadoInicial, accion) {
    console.log(accion);
    switch (accion.type) {
      case "PROFILE_MOVI00":
        return {
          ...estado,
          profileMovi00: accion.payload,
        };
      case "PROFILE_MOVI01":
        return {
          ...estado,
          profileMovi01: accion.payload,
        };
        case "PROFILE_MOVI02":
          return {
            ...estado,
            profileMovi02: accion.payload,
          };
          case "PROFILE_MOVI03":
            return {
              ...estado,
              profileMovi03: accion.payload,
            };
          case "TECHNOLOGIES_MOVI00":
            return {
              ...estado,
              technologiesMovi00: accion.payload,
            };
      default:
        return estado;
    }
  }
  export default rootReducer;