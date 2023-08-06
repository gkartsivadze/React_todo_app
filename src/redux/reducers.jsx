import { createStore } from "redux";

export const loginStateReducer = (state = { current: false, username: "" }, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                current: true,
                username: action.username
            }
        case "LOGOUT":
            return {
                current: false,
                username: ""
            }
        default:
            return {
                current: state.current,
                username: state.username
            }
    }
}

const store = createStore(loginStateReducer)

export default store;