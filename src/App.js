import './App.css';
import React, { useContext } from "react";
import {Routes, Route, Navigate, Link} from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Landing from "./pages/landing-page/Landing";
import NavBarLandingPage from "./components/navbar-landing-page/NavBarLandingPage";
import PokemonCard from "./components/pokemon-card/PokemonCard";
import PokemonSearchPage from "./pages/search-pokemon-page/PokemonSearchPage";
import PokemonListPage from "./pages/list-pokemon-page/PokemonListPage";
import BerryListPage from "./pages/list-berry-page/BerryListPage";
import Home from "./pages/home-page/Home";
import Registration from "./pages/registration-page/Registration";
import Login from "./pages/login-page/Login";
import NavBar from "./components/navbar-main/NavBar";


function App() {

    //isAuthenticated add later!
    //const {isAuthenticated} = useContext(LoginContext);

  return (
    <>

        <NavBarLandingPage/>

        <Routes>
            <Route path="/landing-page" element={<Landing/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/registration-page" element={<Registration/>}/>
            <Route path="/login-page" element={<Login/>}/>
            <Route path="/pokemon-list-page" element={<PokemonListPage/>}/>
        </Routes>



        {/*<PokemonSearchPage/>*/}

       {/* <PokemonListPage/>*/}

        {/*<BerryListPage/>*/}









    </>
  );
}

export default App;
