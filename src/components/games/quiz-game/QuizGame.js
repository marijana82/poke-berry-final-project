import "./QuizGame.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../button/Button";
import Pokeball from "../../pokeball/Pokeball";
import {Link} from "react-router-dom";

function QuizGame() {

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [userGuess, setUserGuess] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, toggleIsLoading] = useState(false);
    const [error, setError] = useState(false);

    //to fetch random pokemon from api
    async function fetchRandomPokemon() {
        toggleIsLoading(true);
        setError(false);
        setUserGuess("");

        try {
            const randomPokemonId = Math.floor(Math.random() * 1100) + 1;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);
            console.log(response.data);
            setPokemonData(response.data);
            setPokemonName(response.data.name);
            setMessage("");


        } catch(e) {
            console.error(e);
            setError(true);
        }
        toggleIsLoading(false);
    }



    //to check user's guess
    function checkUserGuess() {
        if (userGuess.toLowerCase() === pokemonData.name.toLowerCase()) {
            setMessage("Well done! This pokemon's name is " + userGuess.toUpperCase() + " ! ");
        } else {
            setMessage("It seems you gave a wrong answer. This pokemon's name is: " + pokemonName.toUpperCase() + ".")
        }
    }



    useEffect(() => {
        fetchRandomPokemon();
    }, []);



    //to handle user input
    function handleInputChange(e) {
        setUserGuess(e.target.value);
    }




    return(
        <>
            <div className="game-container">

                {isLoading  ?
                    <p>The game is loading...</p>
                    :
                    (
                        <div className="game-stats-container">

                            <div className="game-title-container">
                                <h1 className="game-title">Pokemon Quiz Game</h1>
                            </div>

                            <div className="game-image-container">
                                {pokemonData && pokemonData.sprites &&
                                    <img
                                        src={pokemonData.sprites.other.home.front_default}
                                        alt={pokemonData.name}
                                        className="game-image"
                                    />
                                }

                            </div>

                            <div className="game-navigation-container">

                               {/*TESTING FROM HERE TO THE INPUT TAG*/}
                                {userGuess.length > 0 && userGuess !== pokemonData.name ?

                                    (
                                        <div className="hints-container">
                                            <h3>This pokemon <b>weights {pokemonData.weight} gram </b> and has <b>base experience of {pokemonData.base_experience} hp.</b></h3>
                                            <br/>
                                            <h2><b>Abilities</b></h2>
                                            {pokemonData && pokemonData.abilities &&
                                                pokemonData.abilities.map((ability) => {
                                                    return(
                                                        <ul>
                                                            <li>{ability.ability.name}</li>
                                                        </ul>
                                                    )
                                                })}

                                            <h2><b>Type</b></h2>
                                            {pokemonData && pokemonData.types &&
                                                pokemonData.types.map((type) => {
                                                    return(
                                                        <ul>
                                                            <li>{type.type.name}</li>
                                                        </ul>
                                                    )
                                                })}

                                            <p className="wrong-answer">{message}</p>
                                        </div>
                                    ) :

                                    <p className="correct-answer">{message}</p>

                                }

                                <input
                                    type="text"
                                    placeholder="Need a hint? Start typing..."
                                    value={userGuess}
                                    onChange={handleInputChange}
                                    className="game-input"
                                />

                                <div className="game-button-container">
                                    <Button
                                        type="button"
                                        clickHandler={checkUserGuess}
                                        styling="game-button"
                                    >I feel lucky!
                                    </Button>

                                    <Button
                                        type="button"
                                        clickHandler={() => fetchRandomPokemon()}
                                        styling="game-button"
                                    >Try again!
                                    </Button>
                                </div>

                                <Link
                                    to={"/"}
                                    style={{textDecoration: 'none', color: 'black'}}
                                >
                                    <Pokeball ballMessage="or click here to go back to home page"/>
                                </Link>

                            </div>
                        </div>
                    )}
            </div>

        </>
    );
}

export default QuizGame;