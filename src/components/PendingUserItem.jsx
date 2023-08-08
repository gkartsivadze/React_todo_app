import React from "react";

class PendingUserItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/", {
            headers: {
                'X-Api-Key': 'qJVRUZpYo8NyHRcdigwK6g==6Y33ljDgg4cZF1z9'
            }
        }).then(data => data.json()).then(data => this.setState({user: data.results[0]}))
    }

    render() {
        console.log(this.state.user);
        return (
            <tr>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{this.state.user.name?.first || "Not found"}</td>
                <td>{this.state.user.name?.last || "Not found"}</td>
                <td>{this.state.user.location?.country || "Not found"}</td>
                <td>{this.state.user?.phone || "Not found"}</td>
            </tr>
        )
    }
}

export default PendingUserItem