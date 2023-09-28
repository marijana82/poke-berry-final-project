import "./Registration.css";
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import FormRegister from "../../components/form/register/FormRegister";


function Registration() {
    return (
        <>
            <Header
                message="Registration page"
            />

          <Main>

              <FormRegister/>

          </Main>


            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />



        </>
    )
}

export default Registration;