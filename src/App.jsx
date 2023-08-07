import React from "react";
import { Outlet } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

export default App;