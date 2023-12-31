import "./PokemonListPage.css";
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import PokeInfo from "../../components/pokemon-info/PokeInfo";
import Button from "../../components/button/Button";
import PokemonCard from "../../components/card/pokemon-card/PokemonCard";
import {CustomFavoritesContext} from "../../context/FavoritesContext";
import Pagination from "../../components/pagination/Pagination";
import Footer from "../../components/footer/Footer";


function PokemonListPage() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/?limit=24&offset=24');
    const [nextEndpoint, setNextEndpoint] = useState('');
    const [previousEndpoint, setPreviousEndpoint] = useState('');
    const [pokedex, setPokedex] = useState();
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const itemsPerPage = 24;
    const { favoritePokemon } = useContext(CustomFavoritesContext);
    const controller = new AbortController();


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
            setLoading(false);
        }
    };



    async function getPokemon(response) {
        try {
            response.map(async(poke) => {
                const result = await axios.get(poke.url);
                setPokemonData(statePoke => {

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
                                favoritesLength={favoritePokemon.length}
                                chosenFavorites={favoritePokemon}
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
                            key={`${pokemonData.name}-${pokemonData.id}`}
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
                                favoritesLength={favoritePokemon.length}
                                chosenFavorites={favoritePokemon}
                            />

                        </div>



                    </div>
                    <div className="right-content-container">
                        <PokeInfo
                            data={pokedex}
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