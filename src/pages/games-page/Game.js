import "./Game.css";
import React from "react";
import QuizGame from "../../components/games/quiz-game/QuizGame";
import Header from "../../components/header/Header";


function Game() {
    return(
        <>
            <Header/>
            <QuizGame/>

        </>
    )
}

export default Game;