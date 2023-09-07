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
                                            <h2>{ability.ability.name}</h2>
                                        </div>

                                    </>
                                )
                            })}

                        </div>
                        <div className="base-stat">

                            {data.stats && data.stats.map((stat) => {
                                return(
                                    <>
                                        <h3>{stat.stat.name} : {stat.base_stat}</h3>
                                    </>
                                )
                            })}


                        </div>

                    </>





                )
            }


        </>
    )
}

export default PokeInfo;