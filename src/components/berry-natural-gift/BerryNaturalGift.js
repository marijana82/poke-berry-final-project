import "./BerryNaturalGift.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function BerryNaturalGift({ naturalGiftUrl }) {

    const [naturalGift, setNaturalGift] = useState(null);

    async function fetchNaturalGift() {

        try {

            const resultGift = await axios.get(naturalGiftUrl);
            //to sort pokemon in alphabetical order
            const sortedPokemon = resultGift.data.pokemon.sort((a,b) => a.pokemon.name.localeCompare(b.pokemon.name));
            setNaturalGift({ pokemon: sortedPokemon });
            //console.log(resultGift.data);
            //setNaturalGift(resultGift.data);



        } catch(e) {
            console.error(e);
        }

    }

    useEffect(() => {
        fetchNaturalGift();
    }, [naturalGiftUrl]);



    return(
        <>
            {naturalGift &&
                naturalGift.pokemon &&
                naturalGift.pokemon.map((poke) => {
                    return(
                            <div key={poke.pokemon.name}>
                                <Link
                                    to={`/single-pokemon-page/${poke.pokemon.name}`}
                                >
                                <h3>{poke.pokemon.name}</h3>
                                </Link>
                            </div>





                    )
                })

            }
        </>
    )
}

export default BerryNaturalGift;