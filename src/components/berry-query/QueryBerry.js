import "./QueryBerry.css";
import React, {useState} from "react";
import Button from "../button/Button";
import ButtonReset from "../button-reset/ButtonReset";
import FormBerryQuery from "../form-input-berry-query/FormBerryQuery";
import BerryRandom from "../berry-random/BerryRandom";

function QueryBerry({searchItemHandler}) {

    const [queryBerry, setQueryBerry] = useState("");
    const [placeholderBerry, setPlaceholderBerry] = useState("your berry name");

    const resetSearch = () => {
        setQueryBerry("");
        setPlaceholderBerry("your berry name");
    }

    const addSearch = () => {
        setQueryBerry(placeholderBerry);
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
                        <div className="random-button-controllers">

                            <BerryRandom
                                connectChildToParent={parameter => setPlaceholderBerry(parameter)}
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

                    </div>


                </form>
            </article>
    )
}


export default QueryBerry;