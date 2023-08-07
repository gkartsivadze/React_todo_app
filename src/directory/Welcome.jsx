import React from "react";

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMenu: "main"
        }
    }

    synchronizeMenu(e) {
        this.setState({selectedMenu: e.target.value});
    }

    render() {
        return (
            <main id="welcome_page">
                <aside id="menu_bar" onChange={this.synchronizeMenu.bind(this)}>
                    <label>Main<input value="main" type="radio" name="selected_menu" defaultChecked /></label>
                    <label>Staff<input value="staff" type="radio" name="selected_menu" /></label>
                    <label>Pending<input value="pending" type="radio" name="selected_menu" /></label>
                    <label>Log out<input value="logout" type="radio" name="selected_menu" /></label>
                </aside>
                { this.state.selectedMenu == "main" && <aside id="view">main</aside> }
                { this.state.selectedMenu == "staff" && <aside id="view">staff</aside> }
                { this.state.selectedMenu == "pending" && <aside id="view">pending</aside> }
                { this.state.selectedMenu == "logout" && <aside id="view">log out</aside> }
            </main>
        )
    }
}

export default Welcome;