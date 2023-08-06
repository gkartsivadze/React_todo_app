import { createStore } from "redux";

export const loginStateReducer = (state = { current: false, code: 0}, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                current: !state.current,
                code: action.payload
            }
        case "LOGOUT":
            return {
                current: false,
                code: 0
            }
        default:
            return {
                current: state.current,
                code: state.code
            }
    }
}

const store = createStore(loginStateReducer)

export default store;