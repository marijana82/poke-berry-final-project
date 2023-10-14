import "./PokemonHabitat.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonOnMouseOver from "../pokemon-on-mouse-over/PokemonOnMouseOver";


function PokemonHabitat({habitat, evolvesFrom, singlePokemon}) {

    const [pokemonHabitat, setPokemonHabitat] = useState({});




    async function fetchPokemonHabitat() {
        try{
            const resultHabitat = await axios.get(`${habitat}`);
            console.log(resultHabitat.data);
            setPokemonHabitat(resultHabitat.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchPokemonHabitat();
    }, [habitat]);


//TODO: user hover in another component, in this component it's too much

   /* //to show the hover image:
    const handleMouseOver = () => {
        setIsHovering(true);
        //setHoverInfo(pokemonHabitat.url);
        console.log("mouse is hovering");
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }*/



    return(
        <div className="main-result-container-habitat">
            { pokemonHabitat &&
                pokemonHabitat.name &&
                pokemonHabitat.pokemon_species &&

                <div className="result-introduction-container">
                    <h4>{evolvesFrom} lives in {pokemonHabitat.name}, just like the other {pokemonHabitat.pokemon_species.length} pokemon: </h4>
                </div>
            }





            <div className="result-introduction-container">
                {pokemonHabitat &&
                    pokemonHabitat.pokemon_species &&
                    pokemonHabitat.pokemon_species.map((habitatSpecies) => {
                        return(

                            <>
                                <div
                                    className="pokemon-list-button"
                                    //onMouseOver={handleMouseOver}
                                    //onMouseOut={handleMouseOut}
                                >
                                    {/*<h3 className="habitat-lettertype"> {habitatSpecies.name}</h3>*/}

                                    <PokemonOnMouseOver
                                        key={`${habitatSpecies.name}-${habitatSpecies.url}`}
                                        endpointHabitatSpecies={habitatSpecies.url}
                                        //query={query}
                                    />

                                </div>

                            </>
                        )
                    })}
            </div>




        </div>
    )
}

export default PokemonHabitat;