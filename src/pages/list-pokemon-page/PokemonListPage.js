import "./PokemonListPage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import PokeInfo from "../../components/pokemon-info/PokeInfo";
import Button from "../../components/button/Button";


function PokemonListPage() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [nextEndpoint, setNextEndpoint] = useState('');
    const [previousEndpoint, setPreviousEndpoint] = useState('');
    const [pokedex, setPokedex] = useState();


    //function 1: fetching the general pokemon data + previous and next
    async function fetchPokeData() {
        setLoading(true);
        setError(false);

        try {
            const response = await axios.get(endpoint);
            setNextEndpoint(response.data.next);
            setPreviousEndpoint(response.data.previous);
            getPokemon(response.data.results);
            //console.log(pokemonData);

        } catch(e) {
            console.error(e);
            setError(true);
        }
    };


    //function 2: fetching data about specific pokemon, by passing response as parameter
    async function getPokemon(response) {
        try {
            response.map(async(item) => {
                //console.log(item.url);
                const result = await axios.get(item.url);
                //console.log(result.data);
                setPokemonData(state => {
                    //1. save existing array, 2. add new array to it
                    state = [...state, result.data];
                    //to sort out the list by id, don't know why but i'm getting 2 cards for each pokemon!
                    state.sort((a,b) => a.id > b.id ? 1 : -1);
                    return state;
                })
            })

        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchPokeData();
    }, [endpoint]);

    return(
        <>
            <div className="container">
                <div className="left-content">

                    <Card pokemon={pokemonData} loading={loading} key={pokemonData.id} pokemonClick={poke => setPokedex(poke)}/>


                    <div className="button-group">
                        <Button>Previous</Button>
                        <Button>Next</Button>


                    </div>

                </div>
                <div className="right-content">
                    <PokeInfo data={pokedex}/>

                </div>
            </div>
        </>
    )
}

export default PokemonListPage;