import "./CardFirmnessAll.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "../button/Button";
import Firmness from "../card-item-one/firmness/Firmness";


function CardFirmnessAll({infoFirmnessHandler}) {

    const [endpointFirmness, setEndpointFirmness] = useState(`https://pokeapi.co/api/v2/berry-firmness`);
    const [firmness, setFirmness] = useState();
    const [selectedFirmness, setSelectedFirmness] = useState(null);
    const [isClickedFirmness, setIsClickedFirmness] = useState(false);


    async function fetchAllFirmness() {
        try {
            const resultFirmness = await axios.get(endpointFirmness);
            console.log(resultFirmness.data.results);
            setFirmness(resultFirmness.data.results);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchAllFirmness();
    }, [endpointFirmness]);


    const handleButtonClick = (firmness) => {
        setIsClickedFirmness(true);
        setSelectedFirmness(firmness);
    }

    return(
        <div className="button-group-container">

            { !isClickedFirmness
                ?

                (firmness &&
                    firmness.map((firm, index) => {

                            return(

                                <Button
                                    key={index}
                                    clickHandler={() => handleButtonClick(firmness)}
                                    styling="filter-button-flavor"
                                >{firm.name}
                                </Button>
                            )
                        })
                )

                :

                (firmness &&
                        firmness.map((firm, index) => {
                            return(

                                <>

                                <Firmness
                                    firmnessUrl={firm.url}
                                    infoFirmnessHandler={infoFirmnessHandler}
                                />

                                </>
                            )
                        })
                )


            }

            { !isClickedFirmness ? " " :


                <Button
                clickHandler={() => setIsClickedFirmness(false)}
                styling="filter-button-flavor"
                children="Back To Firmness Overview"
                >
                </Button>
            }

        </div>
    );
}

export default CardFirmnessAll;