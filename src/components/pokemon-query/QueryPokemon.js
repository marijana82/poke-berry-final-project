import "./QueryPokemon.css";
import React, { useState } from "react";
//import button


function QueryPokemon({searchItemHandler}) {

    const [query, setQuery] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
        console.log("I am searching for something!");
        searchItemHandler(query);
    }


    return(
        <article className="query-container">

            <form id="search-form" onSubmit={onFormSubmit}>
                <label
                    htmlFor="query-field">

                    <input
                        type="text"
                        name="query"
                        id="query-field"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        placeholder="bulbasaur, ivysaur, pikachu ..."
                    />
                </label>
                <button
                    type="submit"
                    className="search-button"
                >search me!</button>


            </form>

            <div id="search-result">

            </div>

        </article>

    );
}

export default QueryPokemon;