import "./SinglePokemon.css";
import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {AiOutlineArrowLeft} from "react-icons/ai";

import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import TabContainer from "../../components/tabs/TabContainer";

function SinglePokemon() {

    const [singlePokemon, setSinglePokemon] = useState({});
    const [loading, setLoading] = useState(false);


    //name is an object of useParams
    const {id} = useParams();

    useEffect(() => {

        const controller = new AbortController();

        async function fetchSinglePokemon() {

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

        void fetchSinglePokemon();

        return function cleanup() {
            controller.abort();
        }

    }, [id]);




    return(
        <>
            <Header
                message="Single Pokemon Page"
            />


            <Main>
                <div className="single-pokemon-content-container">
                    <Link to={`/pokemon-list-page`}><AiOutlineArrowLeft/></Link>
                    THIS IS SINGLE POKEMON PAGE, GO BACK TO POKEMON OVERVIEW PAGE


                    { singlePokemon &&

                            <h2>{singlePokemon.name}</h2>

                    }

                    {singlePokemon
                        && singlePokemon.sprites
                        && singlePokemon.sprites
                        && singlePokemon.sprites.other.dream_world
                        &&
                        <>
                            <img src={singlePokemon.sprites.other.dream_world.front_default} alt="image of pokemon"/>
                            {/*here maybe create image slider*/}
                        </>
                    }

                    <TabContainer
                        singlePokemon={singlePokemon}
                    />


                </div>
            </Main>

            <Footer/>




        </>
    )
}

export default SinglePokemon;