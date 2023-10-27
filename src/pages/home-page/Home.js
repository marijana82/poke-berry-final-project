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
import Pikachu from "../../components/pikachu/Pikachu";


function Home() {

    return (
        <>

            <Header
            >
                <Pikachu
                    stylingPikachu="pikachu-home-page"
                    stylingNose="nose-cheeks-home-page"
                    stylingSmile="smile-home-page"
                />

            </Header>

            <Main>

                <div className="home-page-layout">
                    <div className="pokemon-card-container">
                        <FlippableCard/>
                    </div>

                    <div className="wrapper-container">
                        <Link
                            to={"/about-page"}
                            style={{textDecoration: 'none', color: 'white'}}
                        >
                        <Article
                            title="About us"
                            message="find out more about Pokemon and berries"
                            stylingTitle="about-us-title"
                            stylingMessage="about-us-message"
                        />
                        </Link>


                        <Link
                            to={"/registration-page"}
                            style={{textDecoration: 'none', color: 'black'}}
                        >
                            <Pokeball ballMessage="or click here to register"/>
                        </Link>
                    </div>


                    <div className="wrapper-container">

                        <Link
                            to={"/about-page"}
                            style={{textDecoration: 'none', color: 'white'}}
                        >
                        <Article
                            title="Contact us"
                            message="let us know what you think about this app"
                            stylingTitle="about-us-title"
                            stylingMessage="about-us-message"
                        />
                        </Link>

                        <Link
                            to={"/login-page" }
                            style={{textDecoration: 'none', color: 'black'}}
                        >
                            <Pokeball ballMessage="or click here to log in"/>
                        </Link>
                    </div>




                </div>

            </Main>


        </>
    )
}

export default Home;