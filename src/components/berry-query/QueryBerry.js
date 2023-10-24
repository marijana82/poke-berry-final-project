import "./QueryBerry.css";
import React, {useState} from "react";
import Button from "../button/Button";
import ButtonReset from "../button-reset/ButtonReset";
import FormBerryQuery from "../form-input-berry-query/FormBerryQuery";

function QueryBerry({searchItemHandler}) {

    const [queryBerry, setQueryBerry] = useState("");
    const [placeholderBerry, setPlaceholderBerry] = useState("your berry name");

    const resetSearch = () => {
        setQueryBerry("");
        setPlaceholderBerry("your berry name");
    }


    function onFormSubmit(e) {
        e.preventDefault();
        searchItemHandler(queryBerry);
    }



    return(

        <article className="query-container-main">
                <form
                    id="search-form"
                    onSubmit={onFormSubmit}>

                    <div className="query-container">

                        <FormBerryQuery
                            idAttribute="query-field"
                            inputType="text"
                            placeholder={placeholderBerry}
                            labelText="Type the name of your favorite berry here!"
                            nameAttribute="query"
                            stateValue={queryBerry}
                            stateSetter={setQueryBerry}
                        />

                        <Button
                            type="submit"
                            className="search-button"
                            disabled={!queryBerry}
                        >Search!
                        </Button>

                    </div>

                    <div className="random-button-controllers">
                        {/*<PokemonRandom
                            connectChildToParent={parameter => setPlaceholder(parameter)}
                        />*/}


                        <ButtonReset
                            children="x"
                            styling="reset-button-tab"
                            resetHandler={resetSearch}
                        />

                    </div>


                </form>
            </article>
    )
}


export default QueryBerry;