import "./BerryListPage.css";
import React, { useState, useEffect } from "react";
import BerryInfo from "../../components/berry-info/BerryInfo";
import CardBerry from "../../components/card/card-berry/CardBerry";
import Button from "../../components/button/Button";
import axios from "axios";
import CardFlavorsAll from "../../components/card-items-all/CardFlavorsAll";

function BerryListPage() {

    const [berryData, setBerryData] = useState([]);
    const [berryDex, setBerryDex] = useState();
    const [endpointBerry, setEndpointBerry] = useState("https://pokeapi.co/api/v2/berry/?limit=24&offset=70");
    const [nextEndpointBerry, setNextEndpointBerry] = useState("");
    const [previousEndpointBerry, setPreviousEndpointBerry] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    //to click and unclick
    const [isFlavorOnClick, setIsFlavorOnClick] = useState(false);
    const [pokeFlavor, setPokeFlavor] = useState({});
    const [flavorDex, setFlavorDex] = useState();

    const [isFirmnessOnClick, setIsFirmnessOnClick] = useState(false);
    const [pokeFirmness, setPokeFirmness] = useState({});

    const [isAllBerriesOnClick, setIsAllBerriesOnClick] = useState(false);



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



    /*all*/
    const handleClickAll = event => {
        setIsAllBerriesOnClick(current => !current);
    }

    const resetSearchAll = () => {
        console.log("button is clicked")
        setIsAllBerriesOnClick(false);
    }



    /*flavor*/
    const handleClickFlavor = event => {
        setIsFlavorOnClick(current => !current);
        //setPokeFlavor({}); //tabOneInfo.evolves_from_species.url
    }

    const resetSearchFlavor = () => {
        console.log("button is clicked")
        setIsFlavorOnClick(false);
    }


    /*firmness*/
    const handleClickFirmness = event => {
        setIsFirmnessOnClick(current => !current);
    }

    const resetSearchFirmness = () => {
        console.log("button is clicked")
        setIsFirmnessOnClick(false);
    }



    return(
        <>
            <div className="main-pokemon-list-container">
                <div className="left-content-container">

                    <div className="button-group-container">
                        <Button
                            clickHandler={handleClickAll}
                        >All</Button>
                        <Button
                            clickHandler={handleClickFlavor}
                        >Flavor</Button>
                        <Button>Firmness</Button>
                    </div>


                    <div className="button-group-container">
                        {previousEndpointBerry &&
                            <Button
                                styling="game-button"
                                clickHandler={() => {
                                    setBerryData([]);
                                    setEndpointBerry(previousEndpointBerry)
                                }}
                            >Previous
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

                    {
                        isAllBerriesOnClick
                            ?
                            <CardBerry
                                berryData={berryData}
                                key={berryData.id}
                                infoBerryHandler={dataContainer => setBerryDex(dataContainer)}
                            />
                            :
                            <p>click on All for overview</p>
                    }


                    {isFlavorOnClick
                        ?
                        <CardFlavorsAll/>
                        :
                        <p>Click on Flavor for overview</p>
                    }

                    {/*<CardFlavor/>*/}
                    {/*<CardFirmness/>*/}



                </div>



                <div className="right-content-container">
                    <BerryInfo
                        data={berryDex} />
                </div>

            </div>

        </>
    )
}

export default BerryListPage;