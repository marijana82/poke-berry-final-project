import "./SearchBar.css";
import React from "react";


function SearchBar({ placeholder, pokeDetails }) {

    //search and filter data
    return(
        <div className="search">
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder={placeholder}
                />
                <div className="search-icon"></div>
                <div className="data-result">


                    {Object.keys(pokeDetails).length > 0

                        &&

                        <article className="result-container">

                            <p>Pokemon type:</p>

                            { pokeDetails.types && pokeDetails.types.map((poke) => {
                                return(
                                    <>
                                        <ul className="pokemon-result-list">
                                            <li key={poke.type.name}>
                                                <h3>{poke.type.name}</h3>
                                            </li>
                                        </ul>
                                    </>
                                )
                            })}



                        </article>

                    }
                </div>
            </div>
        </div>
    )
}

export default SearchBar;