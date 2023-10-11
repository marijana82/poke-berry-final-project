import "./PokemonAbility.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import singlePokemon from "../../pages/single-item-page/SinglePokemon";


function PokemonAbility({ability}) {

    const [abilityState, setAbilityState] = useState([]);

    async function fetchDataAbility() {

        try {

            const resultAbility = await axios.get(`${ability}`);
            console.log(resultAbility.data);
            setAbilityState(resultAbility.data); //two endpoints

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {

        fetchDataAbility();

    }, [singlePokemon]);

    return(
        <>
            {singlePokemon
                && abilityState
                && abilityState.generation
                ?
                <h3>{abilityState.generation.name}</h3>
                :
                <p>info is loading</p>
            }



            {
                abilityState &&
                abilityState.flavor_text_entries &&
                abilityState.flavor_text_entries[0].flavor_text
            }

            {
                abilityState &&
                abilityState.effect_entries &&
                abilityState.effect_entries[1].effect
            }


        </>
    )
}


export default PokemonAbility;