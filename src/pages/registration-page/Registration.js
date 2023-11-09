import "./Registration.css";
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import FormRegister from "../../components/form/register/FormRegister";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";


function Registration() {
    return (
        <>
            <Header
                message="Registration page"
            />

          <Main>
              <Link to={`/`}>
                  <AiOutlineArrowLeft
                      style={
                          {color: 'blue', fontSize: '44px', fontWeight: 'bold'}}
                  />
              </Link>

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