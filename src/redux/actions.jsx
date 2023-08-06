export const LOGIN = (username) => {
    return {
        type: "LOGIN",
        username
    }
}

export const LOGOUT = () => {
    return {
        type: "LOGOUT"
    }
}