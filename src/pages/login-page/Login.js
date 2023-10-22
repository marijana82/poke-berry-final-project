import "./Login.css";
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FormLogin from "../../components/form/login/FormLogin";
import Main from "../../components/main/Main";


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