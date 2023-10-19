import "./Home.css";
import React, {useContext} from "react";
import FlippableCard from "../../components/card/flippable-card/FlippableCard";
import Header from "../../components/header/Header";
import FavoritesContext from "../../context/FavoritesContext";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import Article from "../../components/article-component/Article";
import Pokeball from "../../components/pokeball/Pokeball";
import {Link} from "react-router-dom";


function Home() {

    return (
        <>

            <Header
                message="This is Home page"
            />

            <Main>

                <div className="home-page-layout">
                    <div className="pokemon-card-container">
                        <FlippableCard/>
                    </div>

                    <div className="about-us-container">
                        <Article
                            title="About us"
                            message="find out more about us and what we do"
                        />
                        <Link
                            to={"/registration-page"}
                            style={{textDecoration: 'none', color: 'black'}}
                        >
                            <Pokeball ballMessage="or click here to register"/>
                        </Link>
                    </div>


                    <div className="about-us-container">
                        <Article
                            title="About poke berry app"
                            message="find out more about pokemon and berries and test how they match each other"
                        />
                        <Link
                            to={"/login-page" }
                            style={{textDecoration: 'none', color: 'black'}}
                        >
                            <Pokeball ballMessage="or click here to log in"/>
                        </Link>
                    </div>




                </div>

            </Main>

            <Footer/>

        </>
    )
}

export default Home;