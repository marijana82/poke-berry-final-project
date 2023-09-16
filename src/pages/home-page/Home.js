import "./Home.css";
import React from "react";

import FlippableCard from "../../components/card/flippable-card/FlippableCard";
import Header from "../../components/header/Header";


function Home() {
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