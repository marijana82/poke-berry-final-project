import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import checkIfTokenIsValid from "../helpers/checkIfTokenIsValid";

export const LoginContext = createContext({});

function CustomLoginProvider({ children }) {
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);

        if(token && checkIfTokenIsValid(token)) {
            const decodedToken = jwtDecode(token);
            console.log(decodedToken);

            void fetchUserData(decodedToken, token);

        } else {
            setIsAuth({
                ...isAuth,
                status: 'done',
            });
        }

    }, []);


    async function fetchUserData(decodedToken, token, redirectUrl) {
        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user/`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log(response.data);
            setIsAuth({
                isAuthenticated: true,
                user: {
                    id: response.data.id,
                    username: response.data.username,
                    password: response.data.password,
                    email: response.data.email,
                },
                status: 'done',
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (e) {
            setIsAuth({
                ...isAuth,
                status: 'done',
            });
            console.error(e);
        }

    }


        function login(token) {
            console.log(token);

            const decodedToken = jwtDecode(token);
            console.log("User is logged in.");

            void fetchUserData(decodedToken, token, "/profile-page"); //or just profile?
            localStorage.setItem('token', token);
        }

        function logout() {
            localStorage.clear();
            console.log("User is logged out.");
            setIsAuth({
                isAuthenticated: false,
                user: null,
                status: 'done',
            });
            navigate("/landing-page"); //or just landing?
        }

        const contextData = {
            ...isAuth,
            loginFunction: login,
            logoutFunction: logout,
        }


        return(
            <>
                <LoginContext.Provider value={contextData}>
                    {isAuth.status === 'done' ? children : <p>Here comes the loading component...</p>}
                </LoginContext.Provider>
            </>
        );



    }

    export default CustomLoginProvider;


