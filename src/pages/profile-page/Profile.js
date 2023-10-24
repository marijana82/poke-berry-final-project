import "./Profile.css";
import React, {useContext, useEffect, useState} from "react";
import {LoginContext} from "../../context/LoginContext";
import axios from "axios";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";


function Profile() {

    const [profileData, setProfileData] = useState({});
    const { user } = useContext(LoginContext);

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


    return (
        <>
            <Header
                message="Welcome to your profile page!"
            />

            <Main>

                <div className="main-profile-container">
                    <div className="profile-welcome-user">
                        <p>Hi {user.username} !</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, tempora.</p>
                    </div>

                    <div className="profile-user-data">
                        <p>User data:</p>
                        {Object.keys(profileData).length > 0 &&
                            <ul>
                                <li>Your email:<p className="welcome-text-username"> {user.email}</p></li>
                                <li>Your ID number: <p className="welcome-text-username"> {user.id}</p></li>
                                <li>Your profile photo: <p className="welcome-text-username"> Here comes profile photo </p></li>
                                <li>Recently viewed items: <p className="welcome-text-username">Here come recently viewed items</p></li>
                            </ul>
                        }
                    </div>

                    <div className="profile-navigation-links">
                        <p>here some links</p>
                    </div>

                </div>


            </Main>

            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>
    )
}

export default Profile;