import "./BerryItem.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import HeldByPokemon from "../held-by-pokemon/HeldByPokemon";


function BerryItem({ itemUrl }) {

    const [berryItem, setBerryItem] = useState([]);

    async function fetchItemUrl() {
        try {
            const result = await axios.get(itemUrl);
            console.log(result.data);
            setBerryItem(result.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchItemUrl();
    }, [itemUrl]);


    return(
        <>
            {berryItem && berryItem.sprites &&

                <div className="berry-information-container">

                        <span className="berry-image-container">
                            <img
                                src={berryItem.sprites.default}
                                alt="item-berry"
                                className="berry-image"/>
                        </span>

                    {/*<div className="berry-name-container">
                        <h2 className="berry-titles">Category: </h2>
                        <p>{berryItem.category.name}</p>
                    </div>*/}

                    {berryItem && berryItem.effect_entries.map((entry) => {
                            return(
                                <div className="berry-effect-container">
                                    <h2 className="berry-titles">Effect: </h2>
                                    <p>{entry.effect}</p>
                                    <h2 className="berry-titles">Short effect: </h2>
                                    <p>{entry.short_effect}</p>
                                </div>
                            )
                        })}

                    {berryItem ? <HeldByPokemon berryItem={berryItem}/> : <p>No items to show.</p>}

                </div>

            }


        </>
    )
}

export default BerryItem;