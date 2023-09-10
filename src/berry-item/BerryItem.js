import "./BerryItem.css";
import React, {useEffect, useState} from "react";
import axios from "axios";


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
                    <div className="berry-name-container">
                        <img src={berryItem.sprites.default} alt="item-berry"/>
                        <h3>{berryItem.category.name}</h3>
                    </div>

                    {berryItem && berryItem.effect_entries.map((entry) => {
                            return(
                                <div className="berry-effect-container">
                                    <p>{entry.effect}</p>
                                    <p>{entry.short_effect}</p>
                                </div>
                            )
                        })}

                    <p><b>{berryItem.name}</b> is held by the following pokemon:</p>

                    {berryItem && berryItem.held_by_pokemon.map((heldBy) => {
                        return(
                            <div className="berry-held-by-pokemon-container">
                                <ul>
                                    <li key={berryItem.id}>
                                        {heldBy.pokemon.name}
                                    </li>
                                </ul>

                            </div>
                        );


                    })
                    }


                </div>

            }


        </>
    )
}

export default BerryItem;