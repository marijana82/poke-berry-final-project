import "./Profile.css";
import React, {useContext, useEffect, useState} from "react";
import {LoginContext} from "../../context/LoginContext";
import axios from "axios";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import {CustomFavoritesContext} from "../../context/FavoritesContext";
import {AiFillHeart, AiOutlineArrowLeft} from "react-icons/ai";
import Button from "../../components/button/Button";
import {DITTO} from "../../assets/images/constants";
import Article from "../../components/article/Article";
import Pokeball from "../../components/pokeball/Pokeball";
import NavBar from "../../components/navbar/NavBar";
import {Link} from "react-router-dom";


function Profile() {

    const [profileData, setProfileData] = useState({});

    const { user } = useContext(LoginContext);
    const { favoritePokemon, updateFavoritePokemon } = useContext(CustomFavoritesContext);
    const localStorageKey = 'favoritesList';

    useEffect(() => {
        async function fetchProfileData() {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/user' , {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                setProfileData(result.data);

            } catch(e) {
                console.error(e);
            }
        }
        void fetchProfileData();

    }, []);

   /*function onClickHeart(name){
        console.log(name)
        favoritePokemon.push(name)
    }*/



    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(favoritePokemon));
    }, [favoritePokemon]);



    return (
        <>
            <Header
                message="Welcome to your profile page!"
                description="check your account information and see the list of your recently added favorites"
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

                <div className="main-container-profile">

                <div className="wrapper-container-profile">
                        {Object.keys(profileData).length > 0 &&
                            <section>
                                <h2>Your username: {user.username}</h2>
                                <h2>Your email: {user.email}</h2>
                                <h2>Your ID number:  {user.id}</h2>
                                <h2>Your profile photo: </h2>
                                <div className="image-container-about">
                                <img src={DITTO} alt="profiile-photo" className="about-image-charmander"/>
                                </div>
                            </section>
                        }
                </div>

                <div className="wrapper-container-profile">
                    <Article
                        message="recently added favorites:"
                    />

                    {favoritePokemon &&
                        favoritePokemon.map((oneFavorite) => {

                            /*const heart =
                                favoritePokemon &&
                                favoritePokemon.includes(oneFavorite) &&
                                <AiFillHeart/>;*/

                            return(
                                <>
                                    <h2>{oneFavorite.name}</h2>
                                    {/*<Button
                                //clickHandler={() => removeFromFavorites(oneFavorite.name)}
                                styling="button-favorite"
                            >remove
                                {heart}
                            </Button>*/}

                                </>
                            )
                        })}
                </div>

                </div>

                <section className="wrapper-container-about">
                    <Link
                        to={"/about-page"}
                        style={{textDecoration: 'none', color: 'black'}}
                    >
                        <Pokeball ballMessage="contact us"/>
                    </Link>

                </section>


            </Main>

            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>
    )
}

export default Profile;