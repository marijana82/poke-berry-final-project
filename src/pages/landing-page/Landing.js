import "./Landing.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Pikachu from "../../components/pikachu/Pikachu";


function Landing() {

    return (
        <>
            <Header
                message="Welcome to pokeberry app!"
                description="Click on Pikachu to start your journey now!"
            />
            <Main>
                <Link to={"/"}>
                    <Pikachu
                        stylingSmile="smile"
                        stylingNose="nose-cheeks"
                        stylingPikachu="pikachu"
                    />
                </Link>

            </Main>

        </>
    )
}

export default Landing;