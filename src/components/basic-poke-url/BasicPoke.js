import "./BasicPoke.css"
import React, {useEffect, useState} from "react";
import axios from "axios";

function BasicPoke({pokemonId}) {

    const [singlePokemon, setSinglePokemon] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {

        const controller = new AbortController();
        async function fetchSinglePokemon() {
            setLoading(true);
            setError(false);

            try {
                const singleResponse = await
                    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
                        {signal: controller.signal});

                if (singleResponse.data) {
                    console.log(singleResponse.data);
                    setSinglePokemon(singleResponse.data);
                    setLoading(false);
                } else {
                    setSinglePokemon(null);
                    setLoading(false);
                }

            } catch(e) {
                console.error(e);
                setError(true);
                setLoading(false);
            }
        }

        void fetchSinglePokemon();

        return function cleanup() {
            controller.abort();
        }

    }, [pokemonId]);



    return(
        <>
            <div className="left-content-container-single">

                { singlePokemon &&
                    <div className="single-pokemon-name-container">
                        <div className="name">
                            <h2>Hi there {singlePokemon.name}!</h2>
                        </div>
                    </div>
                }

                { singlePokemon
                    && singlePokemon.sprites
                    && singlePokemon.sprites
                    && singlePokemon.sprites.other.dream_world
                    &&
                    <div className="single-pokemon-image-container">
                        <img
                            src={singlePokemon.sprites.other.dream_world.front_default}
                            alt="image of pokemon"
                            className="single-pokemon-image"
                        />
                    </div>
                }


            </div>


        </>
    )
}


export default BasicPoke;