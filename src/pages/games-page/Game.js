import "./Game.css";
import React from "react";
import QuizGame from "../../components/games/quiz-game/QuizGame";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Pokeball from "../../components/pokeball/Pokeball";


function Game() {
    return(
        <>
            <Header
                message="Welcome to the games page!"
            />

            <Main>
                <Link to={`/`}>
                    <AiOutlineArrowLeft
                        style={
                            {color: 'blue', fontSize: '44px', fontWeight: 'bold'}}
                    />
                </Link>

            <QuizGame/>

                <section className="wrapper-container-about">
                    <Link
                        to={"/"}
                        style={{textDecoration: 'none', color: 'black'}}
                    >
                        <Pokeball ballMessage="back to home"/>
                    </Link>

                </section>

            </Main>

            <Footer
                buttonMessage="Back to top"
            />

        </>
    )
}

export default Game;