import React from "react"
import PendingUserItem from "../../components/pendingUserItem";

class Pending extends React.Component {
    render() {
        return (
            <aside id="pending" className="view">
                <h1>Pending employee</h1>
                <table id="list">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Planned meeting time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PendingUserItem key="0" id="0" name="Giorgi" lastName="Kartsivadze" position="Front-end Developer" time="16:00" />
                        <PendingUserItem key="1" id="1" name="Giorgi" lastName="Kartsivadze" position="Front-end Developer" time="16:00" />
                        <PendingUserItem key="2" id="2" name="Giorgi" lastName="Kartsivadze" position="Front-end Developer" time="16:00" />
                        <PendingUserItem key="3" id="3" name="Giorgi" lastName="Kartsivadze" position="Front-end Developer" time="16:00" />
                        <PendingUserItem key="4" id="4" name="Giorgi" lastName="Kartsivadze" position="Front-end Developer" time="16:00" />
                        <PendingUserItem key="5" id="5" name="Giorgi" lastName="Kartsivadze" position="Front-end Developer" time="16:00" />
                        <PendingUserItem key="6" id="6" name="Giorgi" lastName="Kartsivadze" position="Front-end Developer" time="16:00" />
                    </tbody>
                </table >
            </aside>
        )
    }
}

export default Pending;