import "./PokemonResults.css";
import React from "react";
import PokemonSpecies from "../pokemon-species/PokemonSpecies";
import SpeechBubble from "../speech-bubble/SpeechBubble";
import {Link} from "react-router-dom";


function PokemonResults({pokeDetails}) {
    console.log(pokeDetails);

    return(
        <div className="">
            {
                pokeDetails &&
                pokeDetails.sprites &&
                pokeDetails.sprites.other &&
                pokeDetails.sprites.other.dream_world &&
                pokeDetails.sprites.other.dream_world.front_default &&
                pokeDetails.species &&

                <div>
                    <div className="speech-bubble-container">

                        <SpeechBubble
                            bubbleMessage="you've been searching for..."
                            dynamicData={pokeDetails.name}
                        />

                        <SpeechBubble
                        >Interested in more pokemon? Click <Link to={"/pokemon-list-page"}>here</Link> for a full pokemon list.
                        </SpeechBubble>

                    </div>

                    {
                        pokeDetails &&
                        pokeDetails.name &&
                        pokeDetails.species &&
                        pokeDetails.sprites.other.dream_world &&


                            <PokemonSpecies
                                speciesUrl={pokeDetails.species.url}
                                pokeImage={pokeDetails.sprites.other.dream_world.front_default}
                            />

                    }

                </div>

            }
        </div>
    )
}

export default PokemonResults;
