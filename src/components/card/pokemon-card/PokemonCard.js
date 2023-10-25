import "./PokemonCard.css";
import React, {useContext, useState} from "react";
import ButtonReset from "../../button-reset/ButtonReset";
import FavoritesContext, {CustomFavoritesContext} from "../../../context/FavoritesContext";
import {AiFillHeart} from "react-icons/ai";
import Button from "../../button/Button";

function PokemonCard({ pokemon, pokemonClick }) {

    //favorites context destructuring
    const { favoritePokemon, updateFavoritePokemon } = useContext(CustomFavoritesContext);


    const [searchString, setSearchString] = useState("");
    const startsWith = str => word => str ? word.name.slice(0,str.length).toLowerCase() === str.toLowerCase() : true

    const resetSearch = () => {
        console.log("button is clicked");
        setSearchString("");
    }

    //   function onClickHeart(name){
    //      console.log(name)
    //      favoritePokemon.push(name)
    //      }


    return(
        <>
            <div className="hover-card-container">
                <div className="card-hover">
                    <div className="input-container">
                    <input
                        type="text"
                        onChange={e => setSearchString(e.target.value)}
                        value={searchString}
                        className="filter-by-letter"
                        placeholder="pokemon"
                    />

                    <ButtonReset
                        children="x"
                        resetHandler={resetSearch}
                        styling="reset-button-tab"
                    />
                    </div>

                </div>
            </div>


            { pokemon &&
                pokemon.filter(startsWith(searchString)).map((onePokemon) => {
                        // const heart =
                        //     favoritePokemon &&
                        //     favoritePokemon.includes(onePokemon.name) &&
                        //     <AiFillHeart/>;

                    return(
                        <>
                            <div
                                className="hover-card-container"
                                key={onePokemon.id}
                                onClick={() => pokemonClick(onePokemon)}
                            >
                                <div className="card-hover">
                                    <div className="image-container">
                                        <img src={onePokemon.sprites.other.dream_world.front_default}
                                             alt="image-of-pokemon"/>
                                    </div>
                                    <div className="content">
                                        <h2>{onePokemon.name}</h2>
                                        <h3>id: {onePokemon.id}</h3>
                                       {/* <Button
                                            clickHandler={() => onClickHeart(onePokemon.name)}
                                            styling="button-favorite"
                                        >Favorite
                                            {heart}
                                        </Button>*/}

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>
    );
}

export default PokemonCard;