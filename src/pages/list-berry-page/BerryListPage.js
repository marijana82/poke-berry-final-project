import "./BerryListPage.css";
import React, { useState, useEffect } from "react";
import BerryInfo from "../../components/berry-info/BerryInfo";
import CardBerry from "../../components/card/CardBerry";
import Button from "../../components/button/Button";
import axios from "axios";


function BerryListPage() {

    const [berryData, setBerryData] = useState([]);
    const [berryDex, setBerryDex] = useState();
    //const [berryItemData, setBerryItemData] = useState([]);
    const [endpointBerry, setEndpointBerry] = useState("https://pokeapi.co/api/v2/berry");
    const [nextEndpointBerry, setNextEndpointBerry] = useState("");
    const [previousEndpointBerry, setPreviousEndpointBerry] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchBerryData() {
        toggleLoading(true);
        setError(false);

        try {
            const response = await axios.get(endpointBerry);
            //console.log(response.data.results);
            //const responseItem = await axios.get('https://pokeapi.co/api/v2/item/100');
            //console.log(responseItem.data);
            //setBerryItemData(responseItem.data);

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

                //******
                //console.log(resultBerry.data.item);

                //this whole object we store in state by using setBerryData
                setBerryData(stateBerry => {
                    //here we create a new array and add new item in the array, which is result.data
                    stateBerry = [...stateBerry, resultBerry.data];
                    stateBerry.sort((a, b) => a.id > b.id ? 1 : -1 );
                    return stateBerry;


                    //*******
                   // getBerryItem(responseItem);
                });
                //*******
                /*setBerryItemData(stateItem => {
                    stateItem = [...stateItem, resultBerry.data.item]
                    return stateItem;

                });*/
            })

            } catch(e) {
            console.error(e);
        }
    }

    //******write this function in a new component

    /*async function getBerryAttributes(resultBerry) {
        try {
            resultBerry.map(async(item) => {
                const resultItem = await axios.get(item.url);
                console.log(resultItem);
            })

        } catch(e) {
            console.error(e);
        }
    }*/

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