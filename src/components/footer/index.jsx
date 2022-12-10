import "../../styles/footer/index.css";
import svgGithub from "../../svg/img/github.svg";

const Footer = () => {
  return (
    <footer className="flexColumn">
      <img
        onClick={() => {
          window.open("https://github.com/crsbl/", "_blank");
        }}
        style={{ width: "10rem", cursor:"pointer" }}
        src={svgGithub}
      ></img><h2>crsbl</h2>
    </footer>
  );
};

export default Footer;
