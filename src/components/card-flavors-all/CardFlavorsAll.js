import "./CardFlavorsAll.css";
import React, {useEffect, useState} from "react";
import axios from "axios";

function CardFlavorsAll() {

    const [endpointFlavors, setEndpointFlavors] = useState(`https://pokeapi.co/api/v2/berry-flavor`);
    const [flavors, setFlavors] = useState();
    const [spicy, setSpicy] = useState({});
    const [dry, setDry] = useState({});
    const [sweet, setSweet] = useState({});
    const [bitter, setBitter] = useState({});
    const [sour, setSour] = useState({});


    async function fetchAllFlavors() {

        try {
            const resultFlavors = await axios.get(endpointFlavors);
            console.log(resultFlavors.data.results);
            setFlavors(resultFlavors.data.results);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchAllFlavors()
    }, [endpointFlavors]);



    return(
        <>
            {flavors &&
                flavors.map((flavor) => {
                    return(
                        <>
                            <button>{flavor.name}</button>
                        </>
                    )
                })
            }


        </>
    );
}

export default CardFlavorsAll;