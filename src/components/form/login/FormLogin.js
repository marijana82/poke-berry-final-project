import "./FormLogin.css";
import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import FormInput from "../../form-input/FormInput";
import Button from "../../button/Button";
import {LoginContext} from "../../../context/LoginContext";


function FormLogin() {

    const [nameLogin, setNameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");


   // const { loginFunction } = useContext(LoginContext);
   // const navigate = useNavigate();

    //button reset
    function handleReset() {
        setNameLogin("");
        setPasswordLogin("");
    }

    return(
        <form
            className="registration-form"
            //onSubmit={logUserIn)
        >
            <div className="container-register-form">
                <p className="title-registration-form">Login form</p>
                <p>Please fill in the login form and press the Log in button in order to log in.</p>

                <FormInput
                    labelText="Your unique username"
                    idAttribute="name"
                    inputType="text"
                    placeholder="Username please"
                    nameAttribute="name"
                    stateValue={nameLogin}
                    stateSetter={setNameLogin}
                />
                <FormInput
                    labelText="Your secret password"
                    idAttribute="password"
                    inputType="password"
                    placeholder="Psssst...your password"
                    nameAttribute="password"
                    stateValue={passwordLogin}
                    stateSetter={setPasswordLogin}
                />
                <Button
                    className="registration-button"
                    type="submit"
                    disabled={nameLogin === "" && passwordLogin === ""}
                >Log in
                </Button>

                <Button
                    type="button"
                    clickHandler={handleReset}
                >Reset all
                </Button>
            </div>

            <div className="container-sign-in">
                <p>Don't have an account yet? <Link to="/registration-page">Register here!</Link></p>
                <p>...or click <Link to={"/"}>here</Link> to go back to home page!</p>
            </div>

        </form>
    )
}

export default FormLogin;