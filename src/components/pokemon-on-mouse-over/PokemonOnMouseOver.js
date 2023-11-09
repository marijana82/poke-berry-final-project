import "./PokemonOnMouseOver.css";
import React, {useEffect, useState} from "react";
import axios from "axios";

function PokemonOnMouseOver({ endpointHabitatSpecies }) {

    const [pokemonInHabitat, setPokemonInHabitat] = useState({});
    const [isHovering, setIsHovering] = useState(false);

    async function fetchPokemonInHabitat() {
        try {
            const resultPokeInHabitat = await axios.get(`${endpointHabitatSpecies}`);
            setPokemonInHabitat(resultPokeInHabitat.data);

        } catch(e) {
            console.error(e);
        }
    }


   const handleMouseOver = () => {
       setIsHovering(true);
       console.log("mouse is hovering");
   }

   const handleMouseOut = () => {
       setIsHovering(false);
   }



    useEffect(() => {
        fetchPokemonInHabitat();
    }, [endpointHabitatSpecies]);

    return(
        <>
            {
                endpointHabitatSpecies &&
                pokemonInHabitat &&

                        <>
                            <div
                                className="pokemon-list-button-this"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h3 className="habitat-lettertype"> {pokemonInHabitat.name}</h3>

                                {
                                    isHovering &&
                                    pokemonInHabitat &&
                                    pokemonInHabitat.color &&
                                    pokemonInHabitat.shape.name &&

                                    <div className="hover-result-container">
                                        <p>{pokemonInHabitat.color.name}</p>
                                        <p>{pokemonInHabitat.shape.name}</p>
                                    </div>
                                }
                            </div>




                        </>
                 }
            </>
        )
}
export default PokemonOnMouseOver;