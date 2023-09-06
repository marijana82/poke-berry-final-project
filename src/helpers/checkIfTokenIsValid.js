import jwtDecode from "jwt-decode";

function checkIfTokenIsValid(token) {
    const decodedToken = jwtDecode(token);

    const currentDate = Date.now();
    console.log("The expiry time of this token is: ", decodedToken.exp);

    if(currentDate > decodedToken.exp * 1000) {
        console.log("The token has expired and is not valid anymore. Please create a new one.");
        return false;
    } else {
        console.log("The token is still valid.");
        return true;
    }

}

export default checkIfTokenIsValid;