import logo from "./logo.svg";
import "./App.css";
import "./styles/constant.css";
import Header from "./components/header/index";
import Main from "./components/main/index";
import React, { useState } from "react";
import Nav from "./components/nav/index";
import Footer from "./components/footer";
import { useDispatch } from "react-redux";

function App() {
/*   let stateScroll = null;
  const dispatch = useDispatch();  */
  return (
    <>
      <div className="App">
 {/*      <Nav />  */}
        <div
   /*         onScroll={(e) => {
            let heightScroll =
              e.currentTarget.scrollHeight - e.currentTarget.offsetHeight;
            let scroll00 = heightScroll / 100;
            let scrol01 = e.currentTarget.scrollTop / scroll00;
            stateScroll = scrol01;

            console.log(stateScroll);

            if (stateScroll > 10 && stateScroll < 11 ) {
              console.log("hola");
              dispatch({
                type: "PROFILE_MOVI00",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }
         if (stateScroll < 10 && stateScroll > 9 ) {
              console.log("dddd");
              dispatch({
                type: "PROFILE_MOVI00",
                payload: {
                  filter: "blur(.5rem)",
                  opacity: 0,
                  transform: "translate(10rem,0)",
                },
              });
            }
      if (stateScroll > 20) {
              console.log("xd");
              dispatch({
                type: "PROFILE_MOVI01",
                payload: {
                  filter: "blur(0rem)",
                  opacity: 1,
                  transform: "translate(0,0)",
                },
              });
            }
         if (stateScroll < 20) {
              console.log("xd");
              dispatch({
                type: "PROFILE_MOVI01",
                payload: {
                  filter: "blur(.5rem)",
                  opacity: 0,
                  transform: "translate(10rem,0)",
                },
              });
            }  
          }} */
          className="containerApp"
        >
    <Header /> 
     <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
