import "./PokemonCard.css";
import React, {useState} from "react";
import ButtonReset from "../../button-reset/ButtonReset";

function PokemonCard({ pokemon, pokemonClick }) {

    const [searchString, setSearchString] = useState("");
    const startsWith = str => word => str ? word.name.slice(0,str.length).toLowerCase() === str.toLowerCase() : true

    const resetSearch = () => {
        console.log("button is clicked");
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
                        styling="reset-button-tab"
                    />
                    </div>

                </div>
            </div>


            { pokemon &&
                pokemon.filter(startsWith(searchString)).map((onePokemon) => {
                    return(
                        <>
                            <div
                                className="hover-card-container"
                                key={`${onePokemon.id}-${onePokemon.name}`}
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