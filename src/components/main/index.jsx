import "../../styles/main/index.css";
import Profile from "./profile";
import Technologies from "./technologies";
import Demos from "./demos/index";
import Slider from './slider/index';

const Main = ({ hookStateScroll00 }) => {
  return (
    <main>
      <Profile/>
      <Technologies />
      <Slider/>
   {/*    <Demos/> */}
    </main>
  );
};

export default Main;
