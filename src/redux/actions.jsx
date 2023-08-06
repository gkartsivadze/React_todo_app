export const LOGIN = (code) => {
    return {
        type: "LOGIN",
        payload: code
    }
}

export const LOGOUT = (code) => {
    return {
        type: "LOGOUT",
        payload: code
    }
}