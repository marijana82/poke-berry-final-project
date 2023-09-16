import "./PokeInfo.css";
import React from "react";
import {POKEMON_SPRITES_CHARMANDER} from "../../assets/images/constants";
import CardPokemonStyled from "../card/card-pokemon-styled/CardPokemonStyled";


function PokeInfo({ data }) {
    console.log(data);
    return(
        <div className="main-pokemon-info-container">
            {

                (!data) ? <h2>"Want to get to know your pokemon? Click on one on the left side of the screen to see how cool they are!..."</h2> : (

                    <>
                        <h1>{data.name}</h1>

                        <span className="poke-image-container">
                            <img
                                src={data.sprites.other.home.front_default}
                                alt="image-pokemon-front"
                            />
                        </span>



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

                                <h2 className="pokemon-logo">EXTRA INFORMATION</h2>
                            </div>





                    </>





                )
            }


        </div>
    )
}

export default PokeInfo;