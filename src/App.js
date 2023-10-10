import './App.css';
import React, { useContext } from "react";
import {Routes, Route, Navigate, Link} from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Landing from "./pages/landing-page/Landing";
import NavBarLandingPage from "./components/navbar-landing-page/NavBarLandingPage";
import PokemonCard from "./components/card/pokemon-card/PokemonCard";
import PokemonSearchPage from "./pages/search-pokemon-page/PokemonSearchPage";
import PokemonListPage from "./pages/list-pokemon-page/PokemonListPage";
import BerryListPage from "./pages/list-berry-page/BerryListPage";
import Home from "./pages/home-page/Home";
import Registration from "./pages/registration-page/Registration";
import Login from "./pages/login-page/Login";
import NavBar from "./components/navbar-main/NavBar";
import Game from "./pages/games-page/Game";
import FilterAdvancedPage from "./pages/filter-advanced-page/FilterAdvancedPage";
import SinglePokemon from "./pages/single-item-page/SinglePokemon";


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
            {/*this is a dynamic route, id is now a property of useParams*/}
            <Route path="/single-pokemon-page/:id" element={<SinglePokemon/>}/>
            <Route path="/berry-list-page" element={<BerryListPage/>}/>
            <Route path="/game-page" element={<Game/>}/>
            <Route path="/filter-advanced-page" element={<FilterAdvancedPage/>}/>


        </Routes>



        {/*<PokemonSearchPage/>*/}

       {/* <PokemonListPage/>*/}

        {/*<BerryListPage/>*/}









    </>
  );
}

export default App;
