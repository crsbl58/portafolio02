import "../../styles/nav/index.css";
import "../../styles/nav/responsiveIndex.css";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <ul className="flexRowWrap">
        <li>
          <Link
          activeStyle={{backgroundColor:"rgba(47, 177, 144, 0.856)"}}
            onSetInactive={() => {
              dispatch({
                type: "HOME_MOVI00",
                payload: {
                  filter: "blur(0.3rem)",
                  opacity: 0.5,
                  transform: "translate(0rem,3rem)",
                },
              });
            }}
            onSetActive={() => {
              dispatch({
                type: "HOME_MOVI00",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }}
            containerId="containerApp"
            to="home"
            spy={true}
            smooth={true}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
             activeStyle={{backgroundColor:"rgba(47, 177, 144, 0.856)"}}
   
            onSetInactive={() => {
              dispatch({
                type: "PROFILE_MOVI00",
                payload: {
                  filter: "blur(0.3rem)",
                  opacity: 0.5,
                  transform: "translate(0rem,3rem)",
                },
              });
              dispatch({
                type: "PROFILE_MOVI01",
                payload: {
                  filter: "blur(0.3rem)",
                  opacity: 0.5,
                  transform: "translate(0rem,3rem)",
                },
              });
              dispatch({
                type: "PROFILE_MOVI02",
                payload: {
                  filter: "blur(0.3rem)",
                  opacity: 0.5,
                  transform: "translate(0rem,3rem)",
                },
              });
              dispatch({
                type: "PROFILE_MOVI03",
                payload: {
                  filter: "blur(0.3rem)",
                  opacity: 0.5,
                  transform: "translate(0rem,3rem)",
                },
              });
            }}
            onSetActive={() => {
              dispatch({
                type: "PROFILE_MOVI00",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
              dispatch({
                type: "PROFILE_MOVI01",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
              dispatch({
                type: "PROFILE_MOVI02",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
              dispatch({
                type: "PROFILE_MOVI03",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }}
            containerId="containerApp"
            to="about"
            spy={true}
            smooth={true}
          >
            Sobre mi
          </Link>
        </li>
        <li>
          <Link
             activeStyle={{backgroundColor:"rgba(47, 177, 144, 0.856)"}}
            onSetInactive={() => {
              dispatch({
                type: "TECHNOLOGIES_MOVI00",
                payload: {
                  filter: "blur(0.3rem)",
                  opacity: 0.5,
                  transform: "translate(0rem,3rem)",
                },
              });
            }}
            onSetActive={() => {
              dispatch({
                type: "TECHNOLOGIES_MOVI00",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }}
            containerId="containerApp"
            to="technologies"
            spy={true}
            smooth={true}
          >
            Tecnologias
          </Link>
        </li>
        <li>
          <Link
             activeStyle={{backgroundColor:"rgba(47, 177, 144, 0.856)"}}
            onSetInactive={() => {
              dispatch({
                type: "SLIDER_MOVI00",
                payload: {
                  filter: "blur(0.3rem)",
                  opacity: 0.5,
                  transform: "translate(0rem,3rem)",
                },
              });
            }}
            onSetActive={() => {
              dispatch({
                type: "SLIDER_MOVI00",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }}
            containerId="containerApp"
            to="templates"
            spy={true}
            smooth={true}
          >
            Paginas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
