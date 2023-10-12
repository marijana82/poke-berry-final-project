import "./PokemonHoverImage.css";
import React, {useEffect, useState} from "react";
import axios from "axios";

function PokemonHoverImage({singlePokemon, isHovering}) {

    const [pokeHoverImage, setPokeHoverImage] = useState({});

    async function fetchSinglePokemon() {
        try {
            const singlePokeResult = await axios.get(`https://pokeapi.co/api/v2/pokemon/${singlePokemon.id}`);
            console.log(singlePokeResult.data);
            setPokeHoverImage(singlePokeResult.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchSinglePokemon();
    }, [isHovering]);



    return(
        <>
            <div className="hover-result-container">
                <h3>{pokeHoverImage.name} is only visible when hovering</h3>
                {isHovering && pokeHoverImage.sprites &&

                    <img src={pokeHoverImage.sprites.front_shiny}/>

                }

            </div>
        </>
    )
}

export default PokemonHoverImage;