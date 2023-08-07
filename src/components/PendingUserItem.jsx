import React from "react";

class PendingUserItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.position}</td>
                <td>{this.props.time}</td>
            </tr>
        )
    }
}

export default PendingUserItem