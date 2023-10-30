import "./Favorites.css";
import React, {useContext, useEffect} from "react";
import {CustomFavoritesContext} from "../../context/FavoritesContext";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import {Link} from "react-router-dom";
import {AiFillHeart, AiOutlineArrowLeft} from "react-icons/ai";
import Article from "../../components/article/Article";
import ButtonReset from "../../components/button-reset/ButtonReset";
import Footer from "../../components/footer/Footer";


function Favorites() {

    const { favoritePokemon, updateFavoritePokemon } = useContext(CustomFavoritesContext);
    const localStorageKey = 'favoritesList';

    //removes from favorites list
    function removeFromFavorites(namePokemon) {
        updateFavoritePokemon((stateFavorites) => {
            const removeFavorite = stateFavorites.filter(
                (pokemon) => pokemon.name !== namePokemon
            );
            console.log("removed from favorites")
            console.log(removeFavorite);
            return removeFavorite;
        });
    }

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(favoritePokemon));
    }, [removeFromFavorites]);





    return(
        <>
            <Header
                message="Favorites page"
            />
            <Main>
                <div className="arrow-back">
                    <Link to={`/`}>
                        <AiOutlineArrowLeft
                            style={
                                {color: 'blue', fontSize: '44px', fontWeight: 'bold'}}
                        />
                    </Link>
                </div>

                <div className="wrapper-container-profile">
                    <Article
                        message="your recently added favorites:"
                    />

                    { favoritePokemon &&
                        favoritePokemon.map((oneFavorite) => {

                            const heart =
                                favoritePokemon &&
                                favoritePokemon.includes(oneFavorite) &&
                                <AiFillHeart/>;

                            return(
                                <div className="profile-favorite">

                                    <Link
                                        to={`/single-pokemon-page/${oneFavorite.name}`}
                                        style={{textDecoration: 'none', color: 'white'}}
                                    >

                                        <div className="poke-favorite">
                                            <img src={oneFavorite.sprites.front_shiny} alt={oneFavorite.name} className="profile-favorites-image"/>
                                            <p>{oneFavorite.name}</p>
                                        </div>

                                    </Link>

                                    <ButtonReset
                                        resetHandler={() => removeFromFavorites(oneFavorite.name)}
                                        styling="reset-button-tab"
                                    > {heart}
                                    </ButtonReset>
                                </div>
                            )
                        })}
                </div>

            </Main>
           <Footer/>

        </>
    )
}

export default Favorites;