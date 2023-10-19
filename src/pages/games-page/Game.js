import "./Game.css";
import React from "react";
import QuizGame from "../../components/games/quiz-game/QuizGame";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";


function Game() {
    return(
        <>
            <Header
                message="Welcome to the games page!"
            />

            <Main>

            <QuizGame/>

            </Main>

            <Footer
                buttonMessage="Back to top"
            />

        </>
    )
}

export default Game;