import "./QueryPokemon.css";
import React, { useState } from "react";
import Button from "../button/Button";
import PokemonRandom from "../pokemon-random/PokemonRandom";
import FormInput from "../form-input/FormInput";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SpeechBubble from "../speech-bubble/SpeechBubble";

function QueryPokemon({searchItemHandler}) {

    const [query, setQuery] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
        console.log("I am searching for something!");
        searchItemHandler(query);
    }


    return(

        <article className="query-container">
            <form
                id="search-form"
                onSubmit={onFormSubmit}>

                <div className="query-container">
                    <FormInput
                        idAttribute="query-field"
                        inputType="text"
                        placeholder="type your pokemon name here"
                        nameAttribute="query"
                        stateValue={query}
                        stateSetter={setQuery}
                    />

                    <Button
                        type="submit"
                        className="search-button"
                        disabled={!query}
                    >Search!
                    </Button>

                    <PokemonRandom/>
                </div>
            </form>
        </article>

    );
}

export default QueryPokemon;