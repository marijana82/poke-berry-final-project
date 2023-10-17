import "./SingleBerry.css";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";



function SingleBerry() {

    const [singleBerry, setSingleBerry] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {

        const controller = new AbortController();

        async function fetchSingleBerry() {

            setLoading(true);

            try {
                const singleResponse = await
                    axios.get(`https://pokeapi.co/api/v2/berry/${id}`,
                        {signal: controller.signal});

                console.log(singleResponse);

            } catch(e) {
                console.error(e);
            }
        }

        void fetchSingleBerry();

        return function cleanup() {
            controller.abort();
        }

    }, [id]);

    return(
        <>
            {singleBerry && <h1>Hi there {singleBerry.name}!</h1>}
        </>
    )
}

export default SingleBerry;