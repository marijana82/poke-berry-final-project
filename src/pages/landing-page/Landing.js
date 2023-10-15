import "./Landing.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import Pikachu from "../../components/pikachu/Pikachu";



function Landing() {
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <Main>
                <Link to={"/"}>
                    <Pikachu/>
                </Link>

            </Main>
            <Footer/>
        </>
    )
}

export default Landing;