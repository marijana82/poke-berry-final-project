import "./QuizGame.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../button/Button";
import ButtonReset from "../../button-reset/ButtonReset";

function QuizGame() {

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [userGuess, setUserGuess] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, toggleIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [firstLetter, setFirstLetter] = useState("");
    const [firstThreeLetters, setFirstThreeLetters] = useState("");
    const [pokeNameLength, setPokeNameLength] = useState(0);
    const [goodAnswers, setGoodAnswers] = useState(0);
    const [badAnswers, setBadAnswers] = useState(0);

    //to fetch random pokemon from api
    async function fetchRandomPokemon() {
        toggleIsLoading(true);
        setError(false);
        setUserGuess("");
        setFirstLetter("");
        setFirstThreeLetters("");
        setPokeNameLength(0);

        try {
            const randomPokemonId = Math.floor(Math.random() * 1100) + 1;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);
            setPokemonData(response.data);
            setPokemonName(response.data.name);
            setFirstLetter(response.data.name.charAt(0));
            setFirstThreeLetters(response.data.name.slice(0, 3));
            setPokeNameLength(response.data.name.length);
            setMessage("");

        } catch(e) {
            console.error(e);
            setError(true);
        }
        toggleIsLoading(false);
    }


    //to check user's guess
    function checkUserGuess(e) {
        e.preventDefault();
        if (userGuess.toLowerCase() === pokemonData.name.toLowerCase()) {
            setMessage("Well done! This pokemon's name is " + userGuess.toUpperCase() + " ! ");
            setGoodAnswers(goodAnswers + 1);
        } else {
            setMessage("It seems you gave a wrong answer. This pokemon's name is: " + pokemonName.toUpperCase() + ".")
            setBadAnswers(badAnswers + 1);
        }
    }

    useEffect(() => {
        fetchRandomPokemon();
    }, []);


    //to handle user input
    function handleInputChange(e) {
        setUserGuess(e.target.value);
    }

    //to reset score
    function resetScore() {
        setGoodAnswers(0);
        setBadAnswers(0);
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

                            { firstLetter &&
                                <div>
                                    <h3>This pokemon's name starts with letter " {firstLetter} "</h3>
                                </div>
                            }

                            <div className="game-navigation-container">

                                {userGuess.length > 0 && userGuess !== pokemonData.name ?

                                    (
                                        <div className="hints-container">

                                            { firstThreeLetters &&
                                                <div>
                                                    <h3>This pokemon's first three letters are: " {firstThreeLetters} "</h3>
                                                </div>
                                            }

                                            { pokeNameLength &&
                                                <div>
                                                    <h3>This pokemon's name has {pokeNameLength} letters. </h3>
                                                </div>
                                            }
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

                                {goodAnswers && <p>Well done: {goodAnswers}</p>}
                                {badAnswers && <p>Try again: {badAnswers}</p>}

                                <ButtonReset
                                    type="button"
                                    resetHandler={resetScore}
                                    styling="reset-button-tab"
                                > x </ButtonReset>

                                <form onSubmit={checkUserGuess}>
                                <input
                                    type="text"
                                    placeholder="Need more hints?"
                                    value={userGuess}
                                    onChange={handleInputChange}
                                    className="game-input"
                                />

                                <div className="game-button-container">
                                    <Button
                                        type="submit"
                                        styling="game-button"
                                    >I feel lucky!
                                    </Button>


                                    {userGuess !== pokemonData.name ?
                                        <Button
                                            type="button"
                                            disabled={true}
                                            styling="game-button"
                                        >Try again
                                        </Button>

                                        :

                                        <Button
                                            type="button"
                                            clickHandler={() => fetchRandomPokemon()}
                                            styling="game-button"
                                        >Try again!
                                        </Button>
                                    }




                                </div>
                                </form>

                            </div>
                        </div>
                    )}
            </div>

        </>
    );
}

export default QuizGame;