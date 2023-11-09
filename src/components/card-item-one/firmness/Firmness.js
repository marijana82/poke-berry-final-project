import "./Firmness.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function Firmness({ firmnessUrl }) {

    const [firmnessData, setFirmnessData] = useState(null);

    async function fetchFirmnessData() {
        try {
            const resultFirmness = await axios.get(firmnessUrl);
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