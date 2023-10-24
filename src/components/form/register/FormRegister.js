import "./FormRegister.css";
import React, {useState} from "react";
import FormInput from "../../form-input/FormInput";
import {Link, useNavigate} from "react-router-dom";
import isValidEmail from "../../../helpers/IsValidEmail";
import Button from "../../button/Button";
import axios from "axios";


function FormRegister() {

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [optionalInfoUser, setOptionalInfoUser] = useState("");
    const [userRole, setUserRole] = useState("");
    //state for functionality
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    //state for registration
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const navigate = useNavigate();

    //async function made to handle registration, connected to the form and to the submit button

    async function onSubmitRegistration(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            //endpoint for registration
            const responseRegister = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                //data we need to send to the backend
                username: nameValue,
                email: emailValue,
                password: passwordValue,
                info: optionalInfoUser,
                role: userRole,
            });

            //no authorization header here!
            console.log(responseRegister);
            setRegisterSuccess(true);
            navigate("/login-page");

        } catch(e) {
            console.error(e);
            toggleError(true);
            //toggleLoading(false);
        }


    }


    function handleReset() {
        setNameValue("");
        setEmailValue("");
        setPasswordValue("");
        setUserRole("");
        setOptionalInfoUser("");
    }


    return(
        <form
            className="registration-form"
            onSubmit={onSubmitRegistration}
        >
            <div className="container-register-form">
                <p className="title-registration-form">Registration form</p>
                <p>Please fill in the registration form and press the Register button in order to create account.</p>

                {nameValue.length < 3 ? <p className="warning-messages">Please type in your username.</p> : <p className="message-validated">Great username!</p>}
                <FormInput
                    labelText="Your unique username"
                    idAttribute="name"
                    inputType="text"
                    placeholder="Username please"
                    nameAttribute="name"
                    stateValue={nameValue}
                    stateSetter={setNameValue}

                />

                {emailValue.length < 6 && <p className="warning-messages">Please make sure your email is at least 6 characters long.</p> }
                {!isValidEmail(emailValue) ? <p className="warning-messages">Don't forget to use @ and your email domain.</p> : <p className="message-validated">Thank you!</p>}
                <FormInput
                    labelText="Your precious email"
                    idAttribute="email"
                    inputType="email"
                    placeholder="Email please"
                    nameAttribute="email"
                    stateValue={emailValue}
                    stateSetter={setEmailValue}
                />

                {passwordValue.length < 6 ? <p className="warning-messages">Please make sure your password is at least 6 characters long.</p> : <p className="message-validated">Good choice!</p>}
                <FormInput
                    labelText="Your secret password"
                    idAttribute="password"
                    inputType="password"
                    placeholder="Psssst...your password"
                    nameAttribute="password"
                    stateValue={passwordValue}
                    stateSetter={setPasswordValue}
                />

                {optionalInfoUser < 3 ? <p className="warning-messages">Please let us know where you're from.</p> : <p className="message-validated">Thank you!</p>}
                <FormInput
                    labelText="Additional information"
                    idAttribute="text"
                    inputType="text"
                    placeholder="Where do you come from?"
                    nameAttribute="additional information"
                    stateValue={optionalInfoUser}
                    stateSetter={setOptionalInfoUser}
                />

                {userRole === "user" ? <p className="message-validated">That's right!</p> : <p className="warning-messages">Please log in as "user".</p> }
                <FormInput
                    labelText="Your role"
                    idAttribute="text"
                    inputType="text"
                    placeholder="What is your role?"
                    nameAttribute="role"
                    stateValue={userRole}
                    stateSetter={setUserRole}
                />

                {error && <p>This account already exists. Try registering with a different username and email.</p>}

                <Button
                    className="registration-button"
                    type="submit"
                    disabled={
                        nameValue.length < 6 &&
                        emailValue.length < 6 &&
                        !isValidEmail(emailValue) &&
                        passwordValue.length < 6 &&
                        userRole === "" &&
                        optionalInfoUser === ""
                        }
                >Register
                </Button>

                <Button
                    type="button"
                    clickHandler={handleReset}
                >Reset All
                </Button>

            </div>

            { registerSuccess
                ?
                <p>You have been successfully registered! <Link to={"/login-page"}>You can now log in!</Link></p>
                :
                <p>Something went wrong, please try again</p> }


            <div className="container-sign-in">
                <p>Already have an account? <Link to={"/login-page"}>Log in here!</Link></p>
                <p>...or click <Link to={"/"}>here</Link> to go back to home page!</p>
            </div>

        </form>
    )
}

export default FormRegister;