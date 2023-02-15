import logo from "./logo.svg";
import "./styles/constant.css";
import "./App.css";
import Header from "./components/header/index";
import Main from "./components/main/index";
import React, { useState } from "react";
import Nav from "./components/nav/index";
import Footer from "./components/footer";
import { useDispatch,useSelector } from "react-redux";
import Model from "./components/model/index";

function App() {
  let stateScroll = null;
  const dispatch = useDispatch();

    const selector = useSelector((state) => state.ModelReducer);


  return (
    <>
      <div className="App">
        { <Nav />  }
       <div
         id="containerApp" className="containerApp"
        >
     {selector.stateModel ? <Model /> : <React.Fragment/>}     
          <Header />
          <Main />
          <Footer />
       </div> 
      </div>
    </>
  );
}

export default App;
