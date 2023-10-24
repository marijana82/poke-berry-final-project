import "./QueryPokemon.css";
import React, { useState } from "react";
import Button from "../button/Button";
import PokemonRandom from "../pokemon-random/PokemonRandom";
import ButtonReset from "../button-reset/ButtonReset";
import FormPokemonQuery from "../form-input-pokemon-query/FormPokemonQuery";

function QueryPokemon({searchItemHandler}) {

    const [query, setQuery] = useState("");
    const [placeholder, setPlaceholder] = useState("your pokemon name");

    function onFormSubmit(e) {
        e.preventDefault();
        searchItemHandler(query);
    }


    const resetSearch = () => {
        setQuery("");
        setPlaceholder("your pokemon name");
    }

    const addSearch = () => {
        setQuery(placeholder);
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

        <article className="query-container-main">
            <form
                id="search-form"
                onSubmit={onFormSubmit}>

                <div className="query-container">

                    <FormPokemonQuery
                        idAttribute="query-field"
                        inputType="text"
                        placeholder={placeholder}
                        labelText="Type your pokemon's name here or hit the hint button to find out its evolution chain!"
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

                </div>

                    <div className="random-button-controllers">
                        <PokemonRandom
                            connectChildToParent={parameter => setPlaceholder(parameter)}
                        />

                        <ButtonReset
                            children="+"
                            styling="reset-button-tab-two"
                            resetHandler={addSearch}
                        />

                        <ButtonReset
                            children="x"
                            styling="reset-button-tab"
                            resetHandler={resetSearch}
                        />

                    </div>


            </form>
        </article>

    );
}

export default QueryPokemon;