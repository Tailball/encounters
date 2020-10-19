const tokenLocation = 'authentication-token';

export const saveToken = token => {
    localStorage.setItem(tokenLocation, token);
}

export const loadToken = () => {
    return localStorage.getItem(tokenLocation);
}