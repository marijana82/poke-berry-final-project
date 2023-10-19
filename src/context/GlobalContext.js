import React, { createContext, useState } from "react";

const getInitialState = () => {
    return {
        favoritesList: [],
        addedToFavorites: [],
    }
}

export const GlobalContext = createContext(getInitialState());

const localStorageKey = 'favorites';

export const GlobalProvider = (props) => {
    let [favorites, setFavorites] = useState([]);

    try {
        //to get array or object
        const store = JSON.parse(localStorage.getItem(localStorageKey))

        if (store && Array.isArray(store)) {
            favorites = store
        }

    } catch(error) {
        console.log(error);
    }

    function isFavorite(pokemonName) {
        if(pokemonName) {
            const myFav = favorites.find((x) => x === pokemonName)
            return myFav ? true : false
        }
        return false;
    }

    const addToFavorites = (pokemonName) => {
        if (favorites.length < 6) {
            if (!isFavorite(pokemonName)) {
                favorites.push(pokemonName);
                setFavorites(favorites);
                //to add array or list to local storage
                localStorage.setItem(localStorageKey, JSON.stringify(favorites))
            }
            console.log("add");
            console.log(pokemonName);
            return "";
        }
        return "pokemon favorite max reached"
    }

    const removeFromFavorites = (pokemonName) => {
        favorites = favorites.filter(x => x !== pokemonName)
        setFavorites(favorites);
        localStorage.setItem(localStorageKey, JSON.stringify(favorites))
        console.log("remove");
        console.log(pokemonName);
        return favorites;
    }

    const contextData = {
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        favorites,
        setFavorites
    };

    return (
        <GlobalContext.Provider
            value={contextData}
        >
            {props.children}

        </GlobalContext.Provider>
    )
}

