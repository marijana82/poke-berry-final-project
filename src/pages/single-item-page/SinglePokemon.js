import "./SinglePokemon.css";
import React, {useState, useEffect} from "react";
import {Link, NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {AiFillHeart, AiFillStar, AiOutlineArrowLeft} from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";


function SinglePokemon() {

    const [singlePokemon, setSinglePokemon] = useState({});
    const [loading, setLoading] = useState(false);

    //name is an object of useParams
    const {id} = useParams();

    useEffect(() => {

        const controller = new AbortController();

        async function getSinglePokemon() {

            setLoading(true);

            try {

                const singleResponse = await
                    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`,
                        {signal: controller.signal})

                if (singleResponse.data) {

                    console.log(singleResponse.data);
                    setSinglePokemon(singleResponse.data);
                    setLoading(false);
                } else {
                    setSinglePokemon(null);
                    setLoading(false);
                }

            } catch(e) {
                console.error(e);
            }
        }

        void getSinglePokemon();

        return function cleanup() {
            controller.abort();
        }

    }, [id]);


    return(
        <>
            <Header
                message="Single Pokemon Page"
            >
                <Link to={`/pokemon-list-page`}><AiOutlineArrowLeft/></Link>
                THIS IS SINGLE POKEMON PAGE, GO BACK TO POKEMON OVERVIEW PAGE
            </Header>

            <Main>
                <div className="single-pokemon-content-container">

                    { singlePokemon && <h2>{singlePokemon.name}</h2> }

                </div>
            </Main>

            <Footer/>




        </>
    )
}

export default SinglePokemon;