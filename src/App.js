import './App.css';
import React, { useContext } from "react";
import {Routes, Route, Navigate, Link} from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Landing from "./pages/landing-page/Landing";
import NavBarLandingPage from "./components/navbar-landing-page/NavBarLandingPage";
import PokemonCard from "./components/pokemon-card/PokemonCard";


function App() {

    //const {isAuthenticated} = useContext(LoginContext);

  return (
    <>
      HELLO POKE BERRIES!

        <PokemonCard/>






    </>
  );
}

export default App;
