import "./PokeInfo.css";
import React from "react";
import {POKEMON_SPRITES_CHARMANDER} from "../../assets/images/constants";


function PokeInfo({ data }) {
    console.log(data);
    return(
        <>
            {

                (!data) ? "Want to get to know your pokemon? Click on one to see how cool they are!..." : (

                    <>
                        <h1>{data.name}</h1>
                        <img src={data.sprites.other.home.front_default} alt="image-pokemon-front"/>
                        <div className="abilities">

                            {data.abilities && data.abilities.map((ability) => {
                                return(
                                    <>
                                        <div className="group">
                                            <button>{ability.ability.name}</button>
                                        </div>

                                    </>
                                )
                            })}




                        </div>
                        <div className="base-stat">
                            <h3>Hp: 30</h3>
                            <h3>Attack: 52</h3>
                            <h3>Defence: 43</h3>
                            <h3>Weight: {data.weight}</h3>
                        </div>

                    </>





                )
            }


        </>
    )
}

export default PokeInfo;