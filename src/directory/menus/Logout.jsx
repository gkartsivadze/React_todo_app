import React from "react"

import { Navigate } from "react-router-dom";

class Logout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Navigate to="/" />
    }
}
export default Logout