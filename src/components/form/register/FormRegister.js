import "./FormRegister.css";
import React, {useState} from "react";
import FormInput from "../../form-input/FormInput";
import {useNavigate} from "react-router-dom";


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
            //onSubmit={onSubmitRegistration}
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
                {/*{!isValidEmail(emailValue) ? <p className="warning-messages">Don't forget to use @ and your email domain.</p> : <p className="message-validated">Thank you!</p>}*/}
                <FormInput
                    labelText="Your precious email"
                    idAttribute="email"
                    inputType="email"
                    placeholder="Email please"
                    nameAttribute="email"
                    stateValue={emailValue}
                    stateSetter={setEmailValue}
                />

                <FormInput/>
                <FormInput/>
                <FormInput/>
                <FormInput/>



            </div>


        </form>
    )
}

export default FormRegister;