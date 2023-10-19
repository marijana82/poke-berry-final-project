import "./Home.css";
import React, {useContext} from "react";
import FlippableCard from "../../components/card/flippable-card/FlippableCard";
import Header from "../../components/header/Header";
import FavoritesContext from "../../context/FavoritesContext";
import Footer from "../../components/footer/Footer";


function Home() {

    return (
        <>

            <Header
                message="This is Home page"
            />


            <div className="pokemon-card-container">
                <FlippableCard/>
            </div>


            <Footer/>


        </>
    )
}

export default Home;