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
      let foundProfile = profiles?.find(x => x.login == this.state.login);
      if(foundProfile && this.state.password == foundProfile.password) {
        this.props.LOGIN(foundProfile.login);
      } else {
        console.log("Try again")
      }
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