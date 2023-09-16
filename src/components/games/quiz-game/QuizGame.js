import React, { useState, useEffect } from "react";
import axios from "axios";
import {POKEMON_DREAM_WORLD} from "../../../assets/images/constants";

function QuizGame() {

    const [pokemonData, setPokemonData] = useState([]);
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
            const randomPokemonId = Math.floor(Math.random() * 1000) + 1;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);
            console.log(response.data);
            setPokemonData(response.data);


        } catch(e) {
            console.error(e);
            setError(true);
        }
        toggleIsLoading(false);
    }



    //to check user's guess
    function checkUserGuess() {
        if (userGuess.toLowerCase() === pokemonData.name.toLowerCase()) {
            setMessage("Well done! You made a good guess!");
        } else {
            setMessage("It seems you gave a wrong answer. Consider joining the PokeBerry community to learn more about pokemon!")
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
            <div>
                <h1>Pokemon Quiz Game</h1>
                {isLoading  ?
                    <p>The game is loading...</p>
                    :
                    (
                        <div>

                            {pokemonData && pokemonData.sprites &&
                                <img src={pokemonData.sprites.other.home.front_default} alt={pokemonData.name}/>
                            }

                            <p>Do you know what is this Pokemon's name?</p>

                            <input
                                type="text"
                                placeholder="Give it a try"
                                value={userGuess}
                                onChange={handleInputChange}
                            />
                            <button
                                type="button"
                                onClick={checkUserGuess}
                            >I feel lucky!
                            </button>
                            <p>{message}</p>

                            <button
                                type="button"
                                onClick={() => fetchRandomPokemon()}
                            >
                                Give it a new try!
                            </button>

                        </div>


                    )}

            </div>

        </>
    );
}

export default QuizGame;