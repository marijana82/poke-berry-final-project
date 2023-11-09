import "./FormRegister.css";
import React, {useState} from "react";
import Input from "../../input/Input";
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
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const navigate = useNavigate();

    async function onSubmitRegistration(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const responseRegister = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                username: nameValue,
                email: emailValue,
                password: passwordValue,
                info: optionalInfoUser,
                role: userRole,
            });

            console.log(responseRegister);
            setRegisterSuccess(true);
            navigate("/login-page");

        } catch(e) {
            console.error(e);
            toggleError(true);
            toggleLoading(false);
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

                { !registerSuccess
                    ?
                    <p>Please fill in the registration form and press the Register button in order to create your personal account.</p>
                    :
                    <p>You have been successfully registered! <Link to={"/login-page"}>You can now log in!</Link></p>
                }


                <Input
                    labelText="Your unique username"
                    idAttribute="name"
                    inputType="text"
                    placeholder="Username please"
                    nameAttribute="name"
                    stateValue={nameValue}
                    stateSetter={setNameValue}
                />
                {nameValue.length < 3 ? <p className="warning-messages">Your username has to be at least 3 characters long.</p> : <p className="message-validated">Great username!</p>}
                {error && <p>This account already exists. Try registering with a different username or email.</p>}

                <Input
                    labelText="Your precious email"
                    idAttribute="email"
                    inputType="email"
                    placeholder="Email please"
                    nameAttribute="email"
                    stateValue={emailValue}
                    stateSetter={setEmailValue}
                />
                {emailValue.length < 6 && <p className="warning-messages">Your email must be at least 6 characters long, must include one capital letter and a number between 1 - 9.</p> }
                {!isValidEmail(emailValue) ? <p className="warning-messages">Don't forget to use @ and your email domain.</p> : <p className="message-validated">Thank you!</p>}
                {error && <p>This account already exists. Try registering with a different username or email.</p>}


                <Input
                    labelText="Your secret password"
                    idAttribute="password"
                    inputType="password"
                    placeholder="Psssst...your password"
                    nameAttribute="password"
                    stateValue={passwordValue}
                    stateSetter={setPasswordValue}
                />
                {passwordValue.length < 6 ? <p className="warning-messages">Your password has to be at least 6 characters long.</p> : <p className="message-validated">Good choice!</p>}


                <Input
                    labelText="Additional information"
                    idAttribute="text_origin"
                    inputType="text"
                    placeholder="Where do you come from?"
                    nameAttribute="additional information"
                    stateValue={optionalInfoUser}
                    stateSetter={setOptionalInfoUser}
                />
                {optionalInfoUser < 3 ? <p className="warning-messages">Please let us know where you're from.</p> : <p className="message-validated">Thank you!</p>}


                <Input
                    labelText="Your role"
                    idAttribute="text_role"
                    inputType="text"
                    placeholder="What is your role?"
                    nameAttribute="role"
                    stateValue={userRole}
                    stateSetter={setUserRole}
                />
                {userRole === "user" ? <p className="message-validated">That's right!</p> : <p className="warning-messages">Please log in as "user".</p> }


                <Button
                    className="registration-button"
                    type="submit"
                    disabled={
                        nameValue.length < 3 &&
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

            <div className="container-sign-in">
                <p>Already have an account? <Link to={"/login-page"}>Log in here!</Link></p>
                <p>...or click <Link to={"/"}>here</Link> to go back to home page!</p>
            </div>

        </form>
    )
}

export default FormRegister;