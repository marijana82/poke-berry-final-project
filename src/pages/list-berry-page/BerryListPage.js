import "./BerryListPage.css";
import React, { useState, useEffect } from "react";
import BerryInfo from "../../components/berry-info/BerryInfo";
import CardBerry from "../../components/card/CardBerry";
import Button from "../../components/button/Button";
import axios from "axios";


function BerryListPage() {

    const [berryData, setBerryData] = useState([]);
    const [berryDex, setBerryDex] = useState();
    const [endpointBerry, setEndpointBerry] = useState("https://pokeapi.co/api/v2/berry/?limit=12&offset=12");
    const [nextEndpointBerry, setNextEndpointBerry] = useState("");
    const [previousEndpointBerry, setPreviousEndpointBerry] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchBerryData() {
        toggleLoading(true);
        setError(false);

        try {
            const response = await axios.get(endpointBerry);
            setNextEndpointBerry(response.data.next);
            setPreviousEndpointBerry(response.data.previous);

            //call getBerry function, and pass it response.data.results as parameter
            //this parameter contains an array, consisting of objects with a key-value pair (name, url)
            getBerry(response.data.results);
            //toggleLoading(false);


        } catch(e) {
            console.error(e);
            setError(true);
        }
    };

    //2. here create async function getBerry, to which we pass response as parameter
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

    return(
        <>
            <div className="container">
                <div className="left-content">

                    {/*parameter dataContainer has to be filled with data from CardBerry*/}
                    <CardBerry berryData={berryData} key={berryData.id} infoBerryHandler={dataContainer => setBerryDex(dataContainer)}/>

                    <div className="button-group">

                        {previousEndpointBerry &&
                            <Button
                                clickHandler={() => {
                                    setBerryData([]);
                                    setEndpointBerry(previousEndpointBerry)
                                }}
                            >Previous
                            </Button>
                        }


                        {nextEndpointBerry &&
                            <Button
                                clickHandler={() => {
                                    setBerryData([]);
                                    setEndpointBerry(nextEndpointBerry)
                                }}
                            >Next
                            </Button>
                        }



                    </div>


                </div>

                <div className="right-content">
                    <BerryInfo data={berryDex} />
                </div>


            </div>

        </>
    )
}

export default BerryListPage;