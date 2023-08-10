import React from "react";

import { connect } from "react-redux"

import { LOGOUT } from "../redux/actions"

import Main from "./menus/Main"
import Staff from "./menus/Staff"
import Pending from "./menus/Pending"
import { Navigate } from "react-router-dom";

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMenu: "main"
        }
    }

    synchronizeMenu(e) {
        const selectedMenu = e.target.value;
        if (selectedMenu === "logout") {
            localStorage.removeItem("loginState");
            this.props.LOGOUT();
        } else {
            this.setState({ selectedMenu });
        }
    }


    render() {
        if(!this.props.loginState) {
            return <Navigate to="/" />
        }
        return (
            <main id="welcome_page">
                <aside id="menu_bar" onChange={this.synchronizeMenu.bind(this)}>
                    <input id="main" value="main" type="radio" name="selected_menu" defaultChecked />
                    <label htmlFor="main">Main</label>
                    <input id="staff" value="staff" type="radio" name="selected_menu" />
                    <label htmlFor="staff">Staff</label>
                    <input id="pending" value="pending" type="radio" name="selected_menu" />
                    <label htmlFor="pending">Pending</label>
                    <input id="logout" value="logout" type="radio" name="selected_menu" />
                    <label htmlFor="logout">Log out</label>
                </aside>
                { this.state.selectedMenu == "main" && <Main /> }
                { this.state.selectedMenu == "staff" && <Staff /> }
                { this.state.selectedMenu == "pending" && <Pending /> }
            </main>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LOGOUT: () => dispatch(LOGOUT())
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.current
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Welcome);