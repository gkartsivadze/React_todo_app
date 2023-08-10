import React from "react";

import StaffUserItem from "../../components/StaffUserItem";

class Staff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10").then(data => data.json()).then(data => this.setState({users: data.results}));
    }

    render() {
        console.log(this.state.users);

        return (
            <aside id="staff" className="view">
                <h1>Employee</h1>
                <table id="list">
                    <thead>
                        <tr>
                            <th style={{width: "5%"}}>No.</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Location</th>
                            <th>Phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.users.map(item => <StaffUserItem key={item.location.street.number} data={item} />) }
                    </tbody>
                </table >
            </aside>
        )
    }
}

export default Staff;