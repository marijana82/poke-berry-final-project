import "./QueryPokemon.css";
import React, { useState } from "react";
import Button from "../button/Button";
import PokemonRandom from "../pokemon-random/PokemonRandom";
import FormInput from "../form-input/FormInput";
import ButtonReset from "../button-reset/ButtonReset";

function QueryPokemon({searchItemHandler}) {

    const [query, setQuery] = useState("");
    const [placeholder, setPlaceholder] = useState("type your pokemon name here");

    function onFormSubmit(e) {
        e.preventDefault();
        console.log("I am searching for something!");
        searchItemHandler(query);

    }


    const resetSearch = () => {
        setQuery("");
        setPlaceholder("type your pokemon name here");
    }

    const removeLetterByLetter = () => {
        if (placeholder.length > 0 &&
            query.length > 0 &&
            query.length > placeholder.length) {
            const updatedPlaceholder = placeholder.slice(1);
            setPlaceholder(updatedPlaceholder);
        }
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
                        placeholder={placeholder}
                        labelText="Type your pokemon's name here to find out its evolution chain"
                        nameAttribute="query"
                        stateValue={query}
                        stateSetter={setQuery}
                        removeLetterByLetter={removeLetterByLetter}
                    />

                    <Button
                        type="submit"
                        className="search-button"
                        disabled={!query}
                    >Search!
                    </Button>

                    <PokemonRandom
                        connectChildToParent={parameter => setPlaceholder(parameter)}
                    />

                    <ButtonReset
                        children="x"
                        resetHandler={resetSearch}
                    />

                </div>
            </form>
        </article>

    );
}

export default QueryPokemon;