import React from "react";
import { Navigate } from "react-router-dom";

import { profiles } from "../users.json";

import { LOGIN } from "../redux/actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      tryedLogin: false,
    };
  }

  synchronize(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  checkData(e) {
    e.preventDefault();

    if (this.state.login.length > 2 && this.state.password.length > 2) {
      this.compareProfiles(e);
    }
  }

  compareProfiles(e) {
    let foundProfile = profiles?.find((x) => x.login == this.state.login);
    if (!this.state.tryedLogin) {
      this.setState({ tryedLogin: true });
    }
    if (foundProfile && this.state.password === foundProfile.password) {
      this.props.LOGIN(foundProfile.login);
    }
  }

  componentWillMount() {
    if(localStorage.getItem("loginState")) {
      this.props.LOGIN();
    }
  }

  render() {
    if (this.props.loginState.state) {
      localStorage.setItem("loginState", true);
      return <Navigate to="/welcome" />;
    }
    return (
      <main id="login_page">
          <form id="login_form" onSubmit={this.checkData.bind(this)}>
            <h1>LOGIN</h1>
            {this.state.tryedLogin ? (
              this.props.loginState.state ? (
                <p>You are logged in!</p>
              ) : (
                <p style={{ color: "red" }}>Please enter correct password</p>
              )
            ) : (
              <p>Please enter your login and password!</p>
            )}
              <input
                onChange={(e) =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                name="login"
                type="text"
                placeholder="username"
                required
              />
              <input
                onChange={(e) =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                name="password"
                type="password"
                placeholder="password"
                required
              />
              <a href="#">Forgot your password?</a>
            <button>Login</button>
          </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginState: { state: state.current, username: state.username },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGIN: (name) => dispatch(LOGIN(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
