import './App.css';
import React, { useContext } from "react";
import {Routes, Route, Navigate, Link} from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Landing from "./pages/landing-page/Landing";
import NavBarLandingPage from "./components/navbar-landing-page/NavBarLandingPage";
import PokemonCard from "./components/pokemon-card/PokemonCard";
import PokemonSearchPage from "./pages/search-pokemon-page/PokemonSearchPage";


function App() {

    //const {isAuthenticated} = useContext(LoginContext);

  return (
    <>
      HELLO POKE BERRIES!

        <PokemonSearchPage/>







    </>
  );
}

export default App;
