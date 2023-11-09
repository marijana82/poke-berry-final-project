import "./Home.css";
import React, {useContext} from "react";
import FlippableCard from "../../components/card/flippable-card/FlippableCard";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Article from "../../components/article/Article";
import Pokeball from "../../components/pokeball/Pokeball";
import {Link} from "react-router-dom";
import Pikachu from "../../components/pikachu/Pikachu";
import {LoginContext} from "../../context/LoginContext";


function Home() {

    const { isAuthenticated } = useContext(LoginContext);

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
                            title="About"
                            message="find out more about Pokemon and berries"
                            stylingTitle="about-us-title"
                            stylingMessage="about-us-message"
                        />
                        </Link>

                        {isAuthenticated ?

                            <Link
                                to={"/about-page"}
                                style={{textDecoration: 'none', color: 'black'}}
                            >
                                <Pokeball
                                    ballMessage="contact us"
                                    styling="poke-ball-container"
                                />
                            </Link>

                            :
                        <Link
                            to={"/registration-page"}
                            style={{textDecoration: 'none', color: 'black'}}
                        >
                            <Pokeball
                                ballMessage="or click here to register"
                                styling="poke-ball-container"
                            />
                        </Link>
                        }

                    </div>

                    {!isAuthenticated ?


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

                            <Pokeball
                                ballMessage="or click here to log in"
                                styling="poke-ball-container"
                            />

                        </Link>
                    </div>

                        :

                        <div className="wrapper-container">
                            <Link
                                to={"/profile-page"}
                                style={{textDecoration: 'none', color: 'white'}}
                            >
                                <Article
                                    title="My profile"
                                    message="check your profile information"
                                    stylingTitle="about-us-title"
                                    stylingMessage="about-us-message"
                                />
                            </Link>

                            <Link
                                to={"/profile-page" }
                                style={{textDecoration: 'none', color: 'black'}}
                            >

                                <Pokeball
                                    ballMessage="my favorites"
                                    styling="poke-ball-container"
                                />

                            </Link>
                        </div>
                    }




                </div>

            </Main>


        </>
    )
}

export default Home;