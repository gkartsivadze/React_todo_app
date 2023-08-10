import React from "react";

class StaffUserItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.data);
        return (
            <tr>
                <td style={{background: "grey"}}>{Math.floor(Math.random() * 100)}</td>
                <td>{this.props.data?.name?.first || "Not found"}</td>
                <td>{this.props.data?.name?.last || "Not found"}</td>
                <td>{this.props.data?.location?.country || "Not found"}</td>
                <td>{this.props.data?.phone || "Not found"}</td>
            </tr>
        )
    }
}

export default StaffUserItem;