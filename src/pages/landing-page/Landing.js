import "./Landing.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
//import header
//import footer
//import main
//do some other imports, check the old project to see what's missing
import NavBarLandingPage from "../../components/navbar-landing-page/NavBarLandingPage";



function Landing() {
    const navigate = useNavigate();

    return (
        <>

            <header></header>
            <nav></nav>
            <section></section>
            <article></article>
            <aside></aside>
            <footer></footer>


            <NavBarLandingPage/>

            <div className="outer-content-box-landing-page">
                <caption>
                    <h1>A simple application that helps you keep your pokemon in one place and let them eat those berries.</h1>
                </caption>

                <div className="inner-content-box-landing-page">
                    <article>
                        <h2>To get a glimpse of what PokeBerry has to offer, click on the card...</h2>
                        <img alt="image of an arrow pointing to the flippable card"/>
                        <p>...or click <Link to={"/registration-page"}>here</Link> to register now!</p>
                    </article>
                </div>
                <div className="content-box-flippable-card">

                    HERE COMES COMPONENT FOR THE FLIPPABLE CARD
                </div>

            </div>



        </>
    )
}

export default Landing;