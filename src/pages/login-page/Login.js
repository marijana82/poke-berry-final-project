import "./Login.css";

import React from "react";
import Header from "../../components/header/Header";
import Main from "../../main/Main";
import Footer from "../../components/footer/Footer";
import FormLogin from "../../components/form/login/FormLogin";
import {Link} from "react-router-dom";


function Login() {
    return (
        <>
            <Header
                message="Login page"
            />

            <Main>
                <FormLogin/>




            </Main>



            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />

        </>
    )
}

export default Login;