import "./PokeInfo.css";
import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {CustomFavoritesContext} from "../../context/FavoritesContext";
import FavoriteCard from "../card/card-favorite/FavoriteCard";
import login from "../../pages/login-page/Login";


function PokeInfo({ data }) {

    const [pokemonFavoritesList, setPokemonFavoritesList] = useState([]);

    const {favoritePokemon, updateFavoritePokemon} = useContext(CustomFavoritesContext);

        function addToFavorites() {
            console.log("clicked button to add to favorites")
            setPokemonFavoritesList(stateFavorites => {
                //1.save existing array, 2.add new array to it
                stateFavorites = [...stateFavorites, data];
                return stateFavorites;
            });
        }
            console.log(pokemonFavoritesList);
            console.log(favoritePokemon);



    //IMPORTANT!!! HERE DO SOMETHING WITH SPREAD OPERATOR SO THAT THE DATA DOESN'T GET OVERWRITTEN BUT ADDED TO THE LIST!
    useEffect(() => {
        updateFavoritePokemon(pokemonFavoritesList);
        //===>this has to stay here until i get things working!!
        //updateFavoritePokemon(data);
    }, [data]);



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

                        {/*ADD TO FAVORITES BUTTON*/}
                        <button
                            className="favorites-message-container"
                            onClick={addToFavorites}
                        >ADD TO FAVORITES
                        </button>

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