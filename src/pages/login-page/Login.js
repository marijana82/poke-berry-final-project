import "./Login.css";
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FormLogin from "../../components/form/login/FormLogin";
import Main from "../../components/main/Main";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";


function Login() {
    return (
        <>
            <Header
                message="Login page"
            />

            <Main>
                <Link to={`/`}>
                    <AiOutlineArrowLeft
                        style={
                            {color: 'blue', fontSize: '44px', fontWeight: 'bold'}}
                    />
                </Link>
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