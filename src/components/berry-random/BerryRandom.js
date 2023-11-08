import "./BerryRandom.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "../button/Button";

function BerryRandom({connectChildToParent}) {

    const [randomBerryData, setRandomBerryData] = useState([]);
    const [randomBerryName, setRandomBerryName] = useState("");



    async function fetchRandomBerry() {
        try {
            const randomBerryId = Math.floor(Math.random() * 64) + 1;
            const responseRandomBerry = await axios.get(`https://pokeapi.co/api/v2/berry/${randomBerryId}`);
            setRandomBerryData(responseRandomBerry.data);
            setRandomBerryName(responseRandomBerry.data.name);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchRandomBerry();
    }, []);



    return(
        <div
            className="random-pokemon-container"
            onClick={() => connectChildToParent(randomBerryName)}
        >


                <>
                    <p>Need a hint?</p>
                    <Button
                        type="button"
                        clickHandler={() => fetchRandomBerry()}
                        styling="random-button"
                    >{randomBerryName}
                    </Button>
                </>



        </div>
    )

}

export default BerryRandom;