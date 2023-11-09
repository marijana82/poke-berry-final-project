import "./PokeInfo.css";
import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {CustomFavoritesContext} from "../../context/FavoritesContext";
import ButtonFavorite from "../card/button-favorite/ButtonFavorite";
import {AiFillHeart} from "react-icons/ai";
import Pokeball from "../pokeball/Pokeball";


function PokeInfo({ data }) {

    let [pokemonFavoritesList, setPokemonFavoritesList] = useState([]);
    const [maxReached, setMaxReached] = useState("Max of 8 favorites reached. Go to favorites to cut the list.");

    const {favoritePokemon, updateFavoritePokemon } = useContext(CustomFavoritesContext);
    const localStorageKey = 'favoritesList';

    function isPokemonFavorite(pokemonName) {
        if(pokemonName) {
            const myFavoritePokemon = favoritePokemon.find((search) => search.name === pokemonName.name);
            return myFavoritePokemon ? true : false;
        }
        return false;
    }


        function addToFavorites(pokemonName) {
            if(favoritePokemon.length < 8) {
            if (!isPokemonFavorite(pokemonName)) {
            setPokemonFavoritesList((stateFavorites) => {
                stateFavorites = [...stateFavorites, data];
                console.log("added to favorites");
                console.log(stateFavorites);
                return stateFavorites;
            });

            } return ""
            } return maxReached;
        } updateFavoritePokemon(pokemonFavoritesList);


        function removeFromFavorites(namePokemon) {
            setPokemonFavoritesList((stateFavorites) => {
                const removeFavorite = stateFavorites.filter(
                    (pokemon) => pokemon.name !== namePokemon
                );
                console.log("removed from favorites")
                console.log(removeFavorite);
                return removeFavorite;
            });
        }


    //add to favorites
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(favoritePokemon))
    }, [favoritePokemon]);


    //local storage get item
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem(localStorageKey));
        if(favorites) {
            setPokemonFavoritesList(favorites);
        }
    }, []);


    //remove from favorites
    useEffect(() => {
        updateFavoritePokemon(pokemonFavoritesList);
        localStorage.setItem(localStorageKey, JSON.stringify(favoritePokemon));
    }, [removeFromFavorites]);



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

                            <span className="poke-image-container">
                            <img
                                src={data.sprites.other.home.front_default}
                                alt="image-pokemon-front"
                                className="transition"
                            />
                        </span>
                        </Link>
                        { favoritePokemon.length === 8
                            &&
                            <Link
                                to={"/favorites-page"}
                                style={{textDecoration: 'none', color: 'lightblue'}}
                            >
                            <Pokeball ballMessage={maxReached} styling="poke-ball-container"/>
                            </Link>
                        }

                        <>
                            {favoritePokemon.some((pokemon) => pokemon.name === data.name) ?
                                (
                                    <ButtonFavorite
                                        clickHandler={() => removeFromFavorites(data.name)}
                                        styling="favorite-button-tab"
                                    >
                                        <AiFillHeart style={{color: 'deeppink'}}/>
                                    </ButtonFavorite>

                                ) :

                                (
                                    <ButtonFavorite
                                        clickHandler={addToFavorites}
                                        styling="favorite-button-tab-two"
                                    > { favoritePokemon.length < 8
                                        &&
                                        <AiFillHeart style={{color: 'green'}}/>
                                    }
                                    </ButtonFavorite>
                                )
                            }
                        </>

                        <div className="abilities">
                            {data.abilities && data.abilities.map((ability) => {
                                return(
                                        <div className="group">
                                            <h2 className="transition">{ability.ability.name}</h2>
                                        </div>
                                )
                            })}
                        </div>

                            <div className="base-stat">
                                {data.stats && data.stats.map((stat) => {
                                    return(
                                            <h3>{stat.stat.name} : {stat.base_stat}</h3>
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