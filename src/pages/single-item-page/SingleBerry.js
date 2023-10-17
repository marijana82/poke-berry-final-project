import "./SingleBerry.css";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import BerryNaturalGift from "../../components/berry-natural-gift/BerryNaturalGift";
import BerryItem from "../../components/berry-item/BerryItem";
import Flavor from "../../components/card-item-one/flavor/Flavor";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import {AiOutlineArrowLeft} from "react-icons/ai";



function SingleBerry() {

    const [singleBerry, setSingleBerry] = useState([]);
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

                console.log(singleResponse.data);
                setSingleBerry(singleResponse.data);

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
            <Header/>

            <Main>

            {singleBerry &&
                singleBerry.natural_gift_type &&
                singleBerry.natural_gift_type.url &&
                singleBerry.item &&
                singleBerry.item.url &&


                <div className="single-page-main-container">

                    <div className="arrow-back">
                        <Link to={`/berry-list-page`}>
                            <AiOutlineArrowLeft
                                style={
                                    {color: 'blue', fontSize: '44px', fontWeight: 'bold'}}
                            />
                        </Link>
                    </div>

                    <div className="single-page-container-left">

                        <div className="single-berry-name-container">
                            <h1>Hi there {singleBerry.name}!</h1>
                        </div>


                        <BerryNaturalGift
                            naturalGiftUrl={singleBerry.natural_gift_type.url}
                        />

                    </div>

                    <div className="single-page-container-right">
                        <BerryItem
                            itemUrl={singleBerry.item.url}
                        />
                    </div>





                </div>


            }

            </Main>

            <Footer/>
        </>
    )
}

export default SingleBerry;