import "./BerryNaturalGift.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import ButtonReset from "../button-reset/ButtonReset";


function BerryNaturalGift({ naturalGiftUrl }) {

    const [naturalGift, setNaturalGift] = useState([]);

    async function fetchNaturalGift() {

        try {

            const resultGift = await axios.get(naturalGiftUrl);
            //to sort pokemon in alphabetical order
            const sortedPokemon = resultGift.data.pokemon.sort((a,b) => a.pokemon.name.localeCompare(b.pokemon.name));
            setNaturalGift({ pokemon: sortedPokemon });

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchNaturalGift();
    }, [naturalGiftUrl]);




    return(
        <>

            { naturalGift &&
                naturalGift.pokemon &&

                <div className="single-berry-name-container">
                    <p>There are <b>{naturalGift.pokemon.length} pokemon </b> who love to eat you:</p>
                </div>
            }

            <div className="result-introduction-container">
            { naturalGift &&
                naturalGift.pokemon &&
                naturalGift.pokemon.map((poke) => {
                    return(
                            <div key={poke.pokemon.name}>
                                <Link
                                    to={`/single-pokemon-page/${poke.pokemon.name}`}
                                    style={{textDecoration: 'none', color: 'white'}}
                                >
                                    <div
                                    className="pokemon-list-button-this"
                                    role="button"
                                    >
                                        <h3>{poke.pokemon.name}</h3>
                                    </div>
                                </Link>
                            </div>
                            )
                    })
                }
            </div>

        </>
    )
}

export default BerryNaturalGift;