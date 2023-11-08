import "./TabTwo.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonAbility from "../pokemon-ability/PokemonAbility";
import PokemonMoves from "../pokemon-moves/PokemonMoves";

function TabTwo({singlePokemon}) {

    const [tabTwoInfo, setTabTwoInfo] = useState({});

    async function fetchGeneralData() {

        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${singlePokemon.id}/`);
            console.log(result.data);
            setTabTwoInfo(result.data);

        } catch (e) {
            console.error(e)
        }
    }



    useEffect(() => {
        fetchGeneralData();
    }, []);



    return(
        <div className="second-tab">

            {/*Second tab content will go here*/}
                {tabTwoInfo
                    && tabTwoInfo.abilities
                    &&
                    <div className="result-introduction-container">
                        <h2>{singlePokemon.name}'s top {tabTwoInfo.abilities.length} abilities:</h2>
                    </div>
                }


            {tabTwoInfo
                && tabTwoInfo.abilities

                ?

                tabTwoInfo.abilities.map((ability) => {
                    return(
                        <>
                            {ability &&

                                <>
                                <div className="result-introduction-container-ability">
                                    <h3>{ability.ability.name}</h3>
                                </div>

                                    <PokemonAbility
                                        ability={ability.ability.url}
                                    />

                                </>

                            }

                        </>

                    )
                })

                :

                <p>Information is loading. Thank you for waiting.</p>
            }

            {tabTwoInfo &&
                tabTwoInfo.moves

                ?

                <PokemonMoves
                    moves={tabTwoInfo.moves}
                    data={tabTwoInfo}
                />

                :

                <p>info is loading</p>
            }




        </div>
    )
}

export default TabTwo;