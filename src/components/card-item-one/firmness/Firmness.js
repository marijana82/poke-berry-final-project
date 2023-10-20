import "./Firmness.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "../../button/Button";
import {Link} from "react-router-dom";


function Firmness({ firmnessUrl, infoFirmnessHandler }) {

    const [firmnessData, setFirmnessData] = useState(null);
    //const [filteredBerries, setFilteredBerries] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    //state for firmness
    const [selectedFirmness, setSelectedFirmness] = useState("");

    async function fetchFirmnessData() {
        try {
            const resultFirmness = await axios.get(firmnessUrl);
            console.log(resultFirmness.data);
            setFirmnessData(resultFirmness.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchFirmnessData();
    }, [firmnessUrl]);


    return(
        <>
            <div>

                {firmnessData &&
                    firmnessData.berries &&
                    firmnessData.berries.map((berry) => {
                        return(


                            <Link
                                to={`/single-berry-page/${berry.name}`}
                                style={{textDecoration: 'none', color: 'black'}}
                            >
                                <div className="berry-button-flavor">
                                    <p>{berry.name}</p>
                                </div>
                            </Link>

                        )
                    })
                }
            </div>

        </>
    )
}

export default Firmness;