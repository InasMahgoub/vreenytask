import React, { Component } from "react"
import { connect } from 'react-redux'

class Login extends Component {
    
   
  render() {
    const handleLogin = (e) => {
        const userName = document.getElementById('userinput').value
        const password = document.getElementById('passwordinput').value
       if(userName !== '' && password !== '')
             {
              console.log("hi")
              this.props.loginUser(true, userName)
            // window.location.href='/'
             }

    } 

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="login-wrap">
              <form className="row g-3">
                <div className="col-12">
                  <label htmlFor="userinput" className="mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userinput"
                    placeholder="User Name"
                    
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="passwordinput" className="mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordinput"
                    placeholder="Password"
            
                  />
                </div>
                <div className="col-12">
                  <button className="btn bg-theme-dark text-white mb-3"
                  onClick={(e) => handleLogin(e)}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let getLoginState = (state) => {

    let loginState =  state.loggedIn;
    
    return {
        isLogged: loginState
    }
  }

let loginDispatch = (dispatch) => {
    return {
      loginUser: (logInOut, userName) => {
        dispatch({ type: "LOGIN_USER", logInOut: logInOut, userName: userName});
      },
    };
  }


export default connect(getLoginState, loginDispatch)(Login)