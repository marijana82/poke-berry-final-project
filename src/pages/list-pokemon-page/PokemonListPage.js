import "./PokemonListPage.css";
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import PokeInfo from "../../components/pokemon-info/PokeInfo";
import Button from "../../components/button/Button";
import PokemonCard from "../../components/card/pokemon-card/PokemonCard";
import {CustomFavoritesContext} from "../../context/FavoritesContext";
import Pagination from "../../components/pagination/Pagination";
import Footer from "../../components/footer/Footer";

//favorites key
const favoritesKey = "favorite";

function PokemonListPage() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/?limit=24&offset=24');
    const [nextEndpoint, setNextEndpoint] = useState('');
    const [previousEndpoint, setPreviousEndpoint] = useState('');
    const [pokedex, setPokedex] = useState();
    //const [favdex, setFavdex] = useState([]);

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [favorites, setFavorites] = useState(() => {
        //getting stored value
        const saved = localStorage.getItem("favorite");
        const initialValue = JSON.parse(saved);
        console.log(initialValue);
        return initialValue || " ";
    });

    const itemsPerPage = 24;

    //why is the destructured favoritePokemon not used?
    const { favoritePokemon, updateFavoritePokemon } = useContext(CustomFavoritesContext);

    const controller = new AbortController();

    //function 1: fetching the general pokemon data + previous and next
    async function fetchPokeData() {
        setLoading(true);
        setError(false);

        try {
            const response = await axios.get(endpoint,
                {signal: controller.signal});

            setNextEndpoint(response.data.next);
            setPreviousEndpoint(response.data.previous);
            setTotalPages(Math.ceil(response.data.count / itemsPerPage)); //calculate total pages
            getPokemon(response.data.results);

        } catch(e) {
            console.error(e);
            setError(true);
        }
    };


    //function 2: fetching data about specific pokemon, by passing response as parameter
    async function getPokemon(response) {
        try {
            response.map(async(poke) => {
                const result = await axios.get(poke.url);
                setPokemonData(statePoke => {
                    //1. save existing array, 2. add new array to it
                    statePoke = [...statePoke, result.data];
                    statePoke.sort((a,b) => a.id > b.id ? 1 : -1);
                    return statePoke;
                });
            })

        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchPokeData();


    }, [endpoint]);

    /*where to render the return statement of cleanup function?*/

    /*return function cleanup() {
        controller.abort();
    }*/



    //favorites update function
    // function updateFavoritePokemon(name) {
    //     const updatedPokeFav = [...favorites];
    //     const indexFavorites = favorites.indexOf(name);
    //     if(indexFavorites >= 0) {
    //         updatedPokeFav.splice(indexFavorites, 1);
    //     } else {
    //         updatedPokeFav.push(name);
    //     }
    //
    //     window.localStorage.setItem(favoritesKey, JSON.stringify(updatedPokeFav));
    //     setFavorites(updatedPokeFav);
    // }


    //function that handles page change
    function handlePageChange(newPage) {
        setPokemonData([]); //clear existing data
        setPage(newPage);
        const newOffset = (newPage - 1) * itemsPerPage;
        setEndpoint(`https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${newOffset}`);
    }


    return(
        <>
                <div className="main-pokemon-list-container">
                    <div className="left-content-container">
                        <div className="button-group-container">

                            <Pagination
                                page={page}
                                totalPages={totalPages}
                                favoritePokemon={favoritePokemon.length}
                                //chosenFavs={favorites}
                            />


                            { previousEndpoint &&
                                <Button
                                    styling="game-button"
                                    clickHandler={() => handlePageChange(page - 1)}
                                >Previous
                                </Button>
                            }



                            { nextEndpoint &&
                                <Button
                                    styling="game-button"
                                    clickHandler={() => handlePageChange(page + 1)}
                                >Next
                                </Button>
                            }

                        </div>

                        <PokemonCard
                            pokemon={pokemonData}
                            loading={loading}
                            key={pokemonData.id}
                            pokemonClick={poke => setPokedex(poke)}
                        />

                        <div className="button-group-container">
                            { previousEndpoint &&
                                <Button
                                    styling="game-button"
                                    clickHandler={() => handlePageChange(page - 1)}
                                >Previous
                                </Button>
                            }

                            {
                                nextEndpoint &&

                                <Button
                                    styling="game-button"
                                    clickHandler={() => handlePageChange(page + 1)}
                                >Next
                                </Button>
                            }

                            <Pagination
                                page={page}
                                totalPages={totalPages}
                                //favoritePokemon={favorites.length}
                                //chosenFavs={favorites}
                            />

                        </div>



                    </div>
                    <div className="right-content-container">
                        <PokeInfo
                            data={pokedex}
                            //favoritesClick={favs => setFavdex(favs)}
                        />
                    </div>
                </div>

            <Footer
                buttonMessage="Back to top"
            />
        </>
    )
}

export default PokemonListPage;