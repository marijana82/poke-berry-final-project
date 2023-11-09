import "./PokemonAbility.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import singlePokemon from "../../pages/single-item-page/SinglePokemon";


function PokemonAbility({ability}) {

    const [abilityState, setAbilityState] = useState([]);

    async function fetchDataAbility() {

        try {

            const resultAbility = await axios.get(`${ability}`);
            setAbilityState(resultAbility.data);

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
                <div className="result-introduction-container-generation">
                    <h3>{abilityState.generation.name}</h3>
                </div>

                :
                <p>info is loading</p>
            }



            {
                abilityState &&
                abilityState.flavor_text_entries &&
                <div className="ability-flavor-text">
                    <h4>{abilityState.flavor_text_entries[0].flavor_text}</h4>
                </div>

            }

            {
                abilityState &&
                abilityState.effect_entries &&
                <div className="ability-flavor-text">
                    <h4>{abilityState.effect_entries[1].effect}</h4>
                </div>

            }


        </>
    )
}


export default PokemonAbility;