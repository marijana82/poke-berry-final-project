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
                    <h2>you've been searching for {pokeDetails.name}</h2>
                    <SpeechBubble
                        bubbleMessage="you've been searching for..."
                        dynamicData={pokeDetails.name}
                    />
                    <PokemonEvolutionChain
                        evolutionId={pokeDetails.id}
                        pokeImage={pokeDetails.sprites.other.dream_world.front_default}
                    />

                </div>


            }
        </div>
    )
}

export default PokemonResults;
