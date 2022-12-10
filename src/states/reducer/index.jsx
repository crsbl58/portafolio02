const estadoInicial = {
  profileMovi00: { opacity: 1, transform: "translate(0rem, 0)" },
  profileMovi01: { opacity: 1, transform: "translate(0rem, 0)" },
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

    default:
      return estado;
  }
}
export default rootReducer;
