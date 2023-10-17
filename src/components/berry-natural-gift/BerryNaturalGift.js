import "./BerryNaturalGift.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function BerryNaturalGift({ naturalGiftUrl }) {

    const [naturalGift, setNaturalGift] = useState(null);

    async function fetchNaturalGift() {

        try {

            const resultGift = await axios.get(naturalGiftUrl);
            console.log(resultGift.data);
            setNaturalGift(resultGift.data);


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


                            <div>
                                <Link
                                    to={`/single-pokemon-page/${poke.pokemon.name}`}
                                >
                                <p>{poke.pokemon.name}</p>
                                </Link>
                            </div>





                    )
                })

            }
        </>
    )
}

export default BerryNaturalGift;