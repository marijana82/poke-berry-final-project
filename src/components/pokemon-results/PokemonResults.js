import "./PokemonResults.css";
import React from "react";
import PokemonCard from "../card/pokemon-card/PokemonCard";
import PokeInfo from "../pokemon-info/PokeInfo";
import SinglePokemon from "../../pages/single-item-page/SinglePokemon";
import TabOne from "../tabs/TabOne";
import PokemonSpecies from "../pokemon-species/PokemonSpecies";
import {DiVim} from "react-icons/di";
import PokemonEvolutionChain from "../pokemon-evolution-chain/PokemonEvolutionChain";


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


                    <PokemonEvolutionChain
                        evolutionId={pokeDetails.id}
                        pokeImage={pokeDetails.sprites.other.dream_world.front_default}
                    />


            }
        </div>
    )
}

export default PokemonResults;
