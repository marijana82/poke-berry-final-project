import React from 'react';
import "./Button.css";


function Button({ type, value, clickHandler, disabled, children, styling }) {
    return (
        <button
            type={type}
            value={value}
            onClick={clickHandler}
            disabled={disabled || false}
            className={styling}
        >
            {children}
        </button>
    );
}

export default Button;