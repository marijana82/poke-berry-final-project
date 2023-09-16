import "./Home.css";
import React from "react";

import FlippableCard from "../../components/card/flippable-card/FlippableCard";


function Home() {
    return (
        <>
            <h1>This is Home page</h1>
            <div className="pokemon-card-container">


                <FlippableCard/>



            </div>


        </>
    )
}

export default Home;