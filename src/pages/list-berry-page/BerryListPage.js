import "./BerryListPage.css";
import React, { useState, useEffect } from "react";
import BerryInfo from "../../components/berry-info/BerryInfo";
import CardBerry from "../../components/card/card-berry/CardBerry";
import Button from "../../components/button/Button";
import axios from "axios";
import Footer from "../../components/footer/Footer";

function BerryListPage() {

    const [berryData, setBerryData] = useState([]);
    const [berryDex, setBerryDex] = useState();
    const [endpointBerry, setEndpointBerry] = useState("https://pokeapi.co/api/v2/berry/?limit=24&offset=24");
    const [nextEndpointBerry, setNextEndpointBerry] = useState("");
    const [previousEndpointBerry, setPreviousEndpointBerry] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const [buttonText, setButtonText] = useState("Click me");

    async function fetchBerryData() {
        toggleLoading(true);
        setError(false);

        try {
            const response = await axios.get(endpointBerry);
            setNextEndpointBerry(response.data.next);
            setPreviousEndpointBerry(response.data.previous);
            getBerry(response.data.results);
            toggleLoading(false);

        } catch(e) {
            console.error(e);
            setError(true);
            toggleLoading(false);
        }
    };

    async function getBerry(response) {
        try {
            response.map(async(berry) => {
                const resultBerry = await axios.get(berry.url);
                console.log(resultBerry.data);

                //this whole object we store in state by using setBerryData
                setBerryData(stateBerry => {
                    //here we create a new array and add new item in the array, which is result.data
                    stateBerry = [...stateBerry, resultBerry.data];
                    stateBerry.sort((a, b) => a.id > b.id ? 1 : -1 );
                    return stateBerry;
                });
            })

            } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchBerryData();
    }, [endpointBerry]);


    /*all*/
    const handleButtonClick = event => {
        setButtonText("Click me");
    }

    setTimeout(() => {
        setButtonText("Previous");
    }, 3000);


    return(
        <>
            <div className="main-pokemon-list-container">
                <div className="left-content-container">
                    <div className="button-group-container">
                        {previousEndpointBerry &&
                            <Button
                                styling="game-button"
                                clickHandler={() => {
                                    setBerryData([]);
                                    setEndpointBerry(previousEndpointBerry);
                                    handleButtonClick();
                                }}
                            >{buttonText}
                            </Button>
                        }

                        {nextEndpointBerry &&
                            <Button
                                styling="game-button"
                                clickHandler={() => {
                                    setBerryData([]);
                                    setEndpointBerry(nextEndpointBerry)
                                }}
                            >Next
                            </Button>
                        }
                    </div>

                    {/*parameter dataContainer has to be filled with data from CardBerry*/}
                    <CardBerry
                        berryData={berryData}
                        key={berryData.id}
                        infoBerryHandler={dataContainer => setBerryDex(dataContainer)}
                    />

                </div>
            </div>

                <div className="right-content-container">

                    {berryDex ? <BerryInfo data={berryDex}/> : <div className="filtered-berry-title"><h3>choose a berry!</h3></div>}

                </div>

            <Footer
                buttonMessage="Back to top"
            />



        </>
    );
}

export default BerryListPage;