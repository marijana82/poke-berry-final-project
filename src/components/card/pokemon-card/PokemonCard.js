import "./PokemonCard.css";
import React, {useContext, useState} from "react";
import ButtonReset from "../../button-reset/ButtonReset";
import FavoritesContext from "../../../context/FavoritesContext";
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import Button from "../../button/Button";

function PokemonCard({ pokemon, pokemonClick }) {
    console.log(pokemon);

    //favorites context destructuring
    const { favoritePokemon, updateFavoritePokemon } = useContext(FavoritesContext);


    const [searchString, setSearchString] = useState("");
    const startsWith = str => word => str ? word.name.slice(0,str.length).toLowerCase() === str.toLowerCase() : true


    const resetSearch = () => {
        console.log("button is clicked")
        setSearchString("");
    }


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
                    />
                    </div>

                </div>
            </div>


            {
                pokemon.filter(startsWith(searchString)).map((onePokemon) => {
                        const onClickHeart = () => {
                            updateFavoritePokemon(onePokemon.name);
                        }

                        const heart =
                            favoritePokemon &&
                            favoritePokemon.includes(onePokemon.name) &&
                            <AiFillHeart/>;


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
                                        <Button
                                            clickHandler={onClickHeart}
                                            styling="button-favorite"
                                        >Favorite {heart}
                                        </Button>

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