import "./PokeInfo.css";
import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {CustomFavoritesContext} from "../../context/FavoritesContext";
import ButtonFavorite from "../card/button-favorite/ButtonFavorite";
import {AiFillHeart} from "react-icons/ai";


function PokeInfo({ data }) {

    const [pokemonFavoritesList, setPokemonFavoritesList] = useState([]);

    const {favoritePokemon, updateFavoritePokemon} = useContext(CustomFavoritesContext);

        function addToFavorites() {
            setPokemonFavoritesList((stateFavorites) => {
                stateFavorites = [...stateFavorites, data];
                return stateFavorites;
            });
        }
            console.log(pokemonFavoritesList);
            console.log(favoritePokemon);

    console.log(pokemonFavoritesList);
    console.log(favoritePokemon);


        function removeFromFavorites(namePokemon) {
            setPokemonFavoritesList((stateFavorites) => {
                const removeFavorite = stateFavorites.filter(
                    (pokemon) => pokemon.name !== namePokemon
                );
                return removeFavorite;
            });
        }


    useEffect(() => {
        updateFavoritePokemon(pokemonFavoritesList);
    }, [pokemonFavoritesList]);


    return(
        <div className="main-pokemon-info-container">

            {
                (!data) ? <h2>"Want to get to know your pokemon? Click on one on the left side of the screen to see how cool they are!..."</h2> : (

                    <>
                        <Link
                            to={`/single-pokemon-page/${data.name}`}
                            style={{textDecoration: 'none', color: 'lightblue'}}
                        >
                            <h1 className="transition">{data.name}</h1>

                            <span
                                className="poke-image-container"
                            >
                            <img
                                src={data.sprites.other.home.front_default}
                                alt="image-pokemon-front"
                                className="transition"
                            />
                        </span>
                        </Link>

                        <>
                            {favoritePokemon.some((pokemon) => pokemon.name === data.name) ?
                                (
                                    <ButtonFavorite
                                        clickHandler={() => removeFromFavorites(data.name)}
                                        styling="favorite-button-tab"
                                    ><AiFillHeart style={{color: 'deeppink'}}/>
                                    </ButtonFavorite>

                                ) :

                                (
                                    <ButtonFavorite
                                        clickHandler={addToFavorites}
                                        styling="favorite-button-tab-two"
                                    ><AiFillHeart style={{color: 'green'}}/>
                                    </ButtonFavorite>


                                )

                            }


                        </>



                        <div className="abilities">
                            {data.abilities && data.abilities.map((ability) => {
                                return(
                                    <>
                                        <div className="group">
                                            <h2 className="transition">{ability.ability.name}</h2>
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

        </div>
    )
}

export default PokeInfo;