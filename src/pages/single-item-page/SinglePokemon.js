import "./SinglePokemon.css";
import React, {useState, useEffect} from "react";
import {Link, NavLink, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {AiFillHeart, AiFillStar, AiOutlineArrowLeft} from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";


function SinglePokemon() {

    const [singlePokemon, setSinglePokemon] = useState({});
    const [loading, setLoading] = useState(false);

    //navigate to previous page
    const navigate = useNavigate();

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

    function handleClick () {
        //replace set to true
        navigate('/pokemon-list-page', {replace: true});
    }


    return(
        <>
            <Header
                message="Single Pokemon Page"
            />


            <Main>
                <div className="single-pokemon-content-container">
                    <Link to={`/pokemon-list-page`}><AiOutlineArrowLeft/></Link>
                    THIS IS SINGLE POKEMON PAGE, GO BACK TO POKEMON OVERVIEW PAGE

                    <Button
                        type="button"
                        onClick={handleClick}
                        styling="navigate-button"
                    > back
                    </Button>

                    { singlePokemon &&

                        <>
                            <h2>{singlePokemon.name}</h2>
                            <div>
                                <img src={singlePokemon.sprites.other.dream_world.front_default} alt="image of pokemon"/>
                            </div>
                            <div>

                            </div>

                        </>




                    }

                </div>
            </Main>

            <Footer/>




        </>
    )
}

export default SinglePokemon;