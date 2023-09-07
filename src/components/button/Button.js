import React from 'react';
import "./Button.css";


function Button({ type, value, clickHandler, disabled, children }) {
    return (
        <button
            type={type}
            value={value}
            onClick={clickHandler}
            disabled={disabled || false}
        >
            {children}
        </button>
    );
}

export default Button;