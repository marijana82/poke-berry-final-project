//checks if email input is valid

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export default isValidEmail;