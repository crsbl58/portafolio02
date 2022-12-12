import "../../styles/footer/index.css";
import svgGithub from "../../svg/img/github.svg";
import svgLinkedIn from "../../svg/img/LinkedIn_icon.svg";
const Footer = () => {
  return (
    <footer className="flexRow">
      <img
        onClick={() => {
          window.open("https://github.com/crsbl/", "_blank");
        }}
        style={{ width: "5rem", cursor:"pointer" }}
        src={svgGithub}
      ></img> <img
      onClick={() => {
        window.open("https://www.linkedin.com/in/cristobal-ortega-290594216/", "_blank");
      }}
      style={{ width: "5rem", cursor:"pointer" }}
      src={svgLinkedIn}
    ></img>
    </footer>
  );
};

export default Footer;
