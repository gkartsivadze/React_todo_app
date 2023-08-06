import React from "react";
import { Navigate } from "react-router-dom"

import { profiles } from '../users.json'

import { LOGIN, LOGOUT } from "../redux/actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            login: "",
            password: ""
        }
    }

    synchronize(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkData(e) {
      e.preventDefault();

      if(this.state.login.length > 2 && this.state.password.length > 2) {
        this.compareProfiles(e);
      }
    }

    compareProfiles(e) {
      let foundProfile = profiles?.find(x => x.login == this.state.login);
      if(foundProfile && this.state.password === foundProfile.password) {
        this.props.LOGIN(foundProfile.login);
      } else {
        this.props.LOGOUT();
      }
    }

    render() {
      if(this.props.loginState.state) {
        return <Navigate to="/welcome" />
      };
        return (
      <section id="form_wrapper">
        <form id="login_form" onSubmit={this.checkData.bind(this)}>
          <label>
            Username
            <input onChange={(e) => this.setState({[e.target.name]: e.target.value})} name="login" type="text" required />
          </label>
          <label>
            Password
            <input onChange={(e) => this.setState({[e.target.name]: e.target.value})} name="password" type="password" required />
          </label>
          {
            this.props.loginState.state ? <p>You are logged in!</p> : <p style={{color: "red"}}>Please enter correct password</p>
          }
          <button>Sign in</button>
        </form>
      </section>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    loginState: { state: state.current, username: state.username}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGIN: (name) => dispatch(LOGIN(name)),
    LOGOUT: () => dispatch(LOGOUT())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);