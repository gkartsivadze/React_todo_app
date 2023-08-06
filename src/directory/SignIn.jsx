import React from "react";

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
      let findProfile = profiles?.find(x => x.login == this.state.login);
      if(findProfile && this.state.password == findProfile.password) {
        alert("Logged In")
      } else {
        console.log("Try again")
      }
    }


    handleClick(e) {
      this.props.LOGIN(Math.round(Math.random() * 100));
      console.log(this.props.loginState)
    }

    render() {

      
        return (
      <section id="form_wrapper">
        <form id="login_form" onSubmit={this.checkData.bind(this)}>
          <label>
            Username
            <input onChange={this.synchronize.bind(this)} name="login" type="text" required />
          </label>
          <label>
            Password
            <input onChange={this.synchronize.bind(this)} name="password" type="password" required />
          </label>
          <button>Sign in</button>
        </form>
        <button onClick={this.handleClick.bind(this)}>
          SignSwitch
        </button>
      </section>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    loginState: { state: state.current, id: state.code}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGIN: (userId) => dispatch(LOGIN(userId)),
    LOGOUT: () => dispatch(LOGOUT())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);