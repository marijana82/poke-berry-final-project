import "./PokemonHabitat.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonHoverImage from "../pokemon-hover-image/PokemonHoverImage";
import PokemonOnMouseOver from "../pokemon-on-mouse-over/PokemonOnMouseOver";


function PokemonHabitat({habitat, evolvesFrom, singlePokemon}) {

    const [pokemonHabitat, setPokemonHabitat] = useState({});
    //to show a component on hover
    const [isHovering, setIsHovering] = useState(false);
    const [hoverInfo, setHoverInfo] = useState({});



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




    //to show the hover image:
    const handleMouseOver = () => {
        setIsHovering(true);
        //setHoverInfo(pokemonHabitat.url);
        console.log("mouse is hovering");
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }



    return(
        <div className="main-result-container-habitat">
            { pokemonHabitat &&
                pokemonHabitat.name &&
                pokemonHabitat.pokemon_species &&

                <div className="result-introduction-container">
                    <h4>{evolvesFrom} lives in {pokemonHabitat.name}, just like the other {pokemonHabitat.pokemon_species.length} pokemon: </h4>
                </div>
            }


            {singlePokemon && isHovering &&
                <PokemonHoverImage
                    singlePokemon={singlePokemon}
                    isHovering={isHovering}
                />
            }


            <div className="result-introduction-container">
                {pokemonHabitat &&
                    pokemonHabitat.pokemon_species &&
                    pokemonHabitat.pokemon_species.map((habitatSpecies) => {
                        return(

                            <>
                                <div
                                    className="pokemon-list-button"
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                >
                                    <h3 className="habitat-lettertype"> {habitatSpecies.name}</h3>
                                </div>


                                {/*<PokemonOnMouseOver
                                    //onMouseOver={handleMouseOver}
                                    //onMouseOut={handleMouseOut}
                                    //pokemonHover={poke => setHoverInfo(poke)}
                                    //PREBACI onMouseOver U PokemonOnMouseOver!!! PROBAJ!
                                    key={singlePokemon.id}
                                    //habitatSpecies={habitatSpecies.name}
                                    //habitatUrl={habitatSpecies.url}
                                    //singlePokemon={singlePokemon}
                                />*/}

                            </>
                        )
                    })}
            </div>




        </div>
    )
}

export default PokemonHabitat;