import "./CardBerry.css";
import React from "react";
import {CHERRY_BERRY, POKEMON_SPRITES_CHARMANDER} from "../../assets/images/constants";


function CardBerry({ berryData, infoBerry }) {
    return(
        <>
            {berryData &&
                berryData.map((item) => {
                    return(
                        <>
                            <div className="card" key={item.id} onClick={() => infoBerry(item)}>
                                <h1>{item.id}</h1>
                                <img src={CHERRY_BERRY} alt="photo-of-berry"/>
                                <h2>{item.item.name}</h2>
                            </div>


                        </>
                        )
                })
            }



        </>
    )
}

export default CardBerry;