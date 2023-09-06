import './App.css';
import React, { useContext } from "react";
import {Routes, Route, Navigate, Link} from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Landing from "./pages/landing-page/Landing";
import NavBarLandingPage from "./components/navbar-landing-page/NavBarLandingPage";

function App() {

    const {isAuthenticated} = useContext(LoginContext);

  return (
    <>
      HELLO POKE BERRIES!
        NEXT STEP IS TO finish working on the landing page, tomorrow! BYE!

        <Landing/>




    </>
  );
}

export default App;
