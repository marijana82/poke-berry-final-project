import "./BerrySearch.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import QueryBerry from "../../components/berry-query/QueryBerry";
import PokemonResults from "../../components/pokemon-results/PokemonResults";
import SpeechBubble from "../../components/speech-bubble/SpeechBubble";
import {Link} from "react-router-dom";
import BerryItem from "../../components/berry-item/BerryItem";
import BerryNaturalGift from "../../components/berry-natural-gift/BerryNaturalGift";
import Footer from "../../components/footer/Footer";

function BerrySearch() {

    const [endpointBerry, setEndpointBerry] = useState(`https://pokeapi.co/api/v2/berry/?limit=70`);
    const [searchItem, setSearchItem] = useState("");
    const [berryDetails, setBerryDetails] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();
        async function fetchBerryData() {
            try {
                const resultBerry = await axios.get(endpointBerry);
                console.log(resultBerry.data.results);
                getBerryDetails(resultBerry.data.results);

            } catch(e) {
                console.error(e);
            }
        }

        if(searchItem) {
            fetchBerryData();
        }

        function getBerryDetails(berries) {
            berries.map((berry) => {
                async function berryDetailsUrl() {
                    try {
                        const response = await axios.get(`${berry.url}`);
                        console.log(response.data);
                        setBerryDetails(response.data);
                    } catch(e) {
                        console.error(e);
                    }
                }
                if(berry.name === searchItem) {
                    berryDetailsUrl();
                }

            });
        }

        return function cleanup() {
            controller.abort();
        }

    }, [searchItem]);

    return(
        <>
            <Header
                message="All berry info in one place"
            />

            <Main>

                    <QueryBerry
                        searchItemHandler={setSearchItem}
                    />

                <div className="container-pokemon-results">

                    {Object.keys(berryDetails).length > 0
                    && berryDetails.name === searchItem ?

                        <article className="berry-result-container">


                            <div className="berry-results">
                                <h2>{berryDetails.name} has the natural gift of {berryDetails.natural_gift_type.name}</h2>
                            </div>


                                 <BerryNaturalGift
                                        naturalGiftUrl={berryDetails.natural_gift_type.url}
                                        naturalGiftName={berryDetails.natural_gift_type.name}
                                 />


                                <BerryItem
                                    itemUrl={berryDetails.item.url}
                                />


                        </article>

                        :

                        <SpeechBubble
                        >Search for berries or click <Link to={"/berry-list-page"}>here</Link> for a full berry list.
                        </SpeechBubble>


                    }

                </div>


            </Main>

            <Footer
                buttonMessage="Back to top"
            />

        </>
    )
}

export default BerrySearch;