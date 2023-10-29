import "./FormLogin.css";
import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Input from "../../input/Input";
import Button from "../../button/Button";
import {LoginContext} from "../../../context/LoginContext";
import axios from "axios";


function FormLogin() {

    const [nameLogin, setNameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [error, toggleError] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const { loginFunction } = useContext(LoginContext);

    const navigate = useNavigate();


    async function logUserIn(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const responseLogin = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: nameLogin,
                password: passwordLogin,
            });

            console.log(responseLogin.data.accessToken);
            loginFunction(responseLogin.data.accessToken);

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }


    //button reset
    function handleReset() {
        setNameLogin("");
        setPasswordLogin("");
    }


    return(
        <form
            className="registration-form"
            onSubmit={logUserIn}
        >
            <div className="container-register-form">
                <p className="title-registration-form">Login form</p>

                { !loginSuccess
                    ?
                    <p>Please fill in the login form and press the Log in button in order to log in.</p>
                    :
                    <p>You have been successfully logged in!</p>
                }


                <Input
                    labelText="Your unique username"
                    idAttribute="name"
                    inputType="text"
                    placeholder="Username please"
                    nameAttribute="name"
                    stateValue={nameLogin}
                    stateSetter={setNameLogin}
                />
                {error && <p>This account does not exist. Try registering with a different username.</p>}

                <Input
                    labelText="Your secret password"
                    idAttribute="password"
                    inputType="password"
                    placeholder="Psssst...your password"
                    nameAttribute="password"
                    stateValue={passwordLogin}
                    stateSetter={setPasswordLogin}
                />
                {error && <p>This account does not exist. Try registering with a different password.</p>}

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