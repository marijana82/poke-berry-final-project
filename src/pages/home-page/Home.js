import "./Home.css";
import React, {useContext} from "react";

import FlippableCard from "../../components/card/flippable-card/FlippableCard";
import Header from "../../components/header/Header";
import Pagination from "../../components/pagination/Pagination";
import FavoritesContext from "../../context/FavoritesContext";


function Home() {

    //favorites context destructuring
    const { favoritePokemon, updateFavoritePokemon } = useContext(FavoritesContext);

    return (
        <>

            <Header
                message="This is Home page"
            />


            <div className="pokemon-card-container">

                <FlippableCard/>


            </div>


        </>
    )
}

export default Home;