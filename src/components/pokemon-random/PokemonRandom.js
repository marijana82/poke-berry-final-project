import "./PokemonRandom.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "../button/Button";


function PokemonRandom({connectChildToParent}) {

    const [randomPokeData, setRandomPokeData] = useState([]);
    const [randomPokeName, setRandomPokeName] = useState("");

    async function fetchRandomPokemon() {

        try {
            const randomPokemonId = Math.floor(Math.random() * 1100) + 1;
            const responseRandom = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);
            setRandomPokeData(responseRandom.data);
            setRandomPokeName(responseRandom.data.name);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchRandomPokemon();
    }, []);




    return(
        <div
            className="random-pokemon-container"
            onClick={() => connectChildToParent(randomPokeName)}
        >

                <>
                    <p>Need a hint?</p>
                    <Button
                        type="button"
                        clickHandler={() => fetchRandomPokemon()}
                        styling="random-button"
                    >{randomPokeName}
                    </Button>
                </>

        </div>


    )
}

export default PokemonRandom;
