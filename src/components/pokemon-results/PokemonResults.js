import "./PokemonResults.css";
import React from "react";
import PokemonCard from "../card/pokemon-card/PokemonCard";
import PokeInfo from "../pokemon-info/PokeInfo";
import SinglePokemon from "../../pages/single-item-page/SinglePokemon";
import TabOne from "../tabs/TabOne";
import PokemonSpecies from "../pokemon-species/PokemonSpecies";
import {DiVim} from "react-icons/di";
import PokemonEvolutionChain from "../pokemon-evolution-chain/PokemonEvolutionChain";
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
                    {/*<h2>you've been searching for {pokeDetails.name}</h2>*/}
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

                        <>

                            <PokemonSpecies
                                speciesUrl={pokeDetails.species.url}
                                pokeImage={pokeDetails.sprites.other.dream_world.front_default}
                            />

                            {/*<PokemonEvolutionChain
                                pokeName={pokeDetails.name}
                                evolutionId={pokeDetails.id}
                                pokeImage={pokeDetails.sprites.other.dream_world.front_default}
                            />*/}


                        </>



                    }




                </div>


            }
        </div>
    )
}

export default PokemonResults;
