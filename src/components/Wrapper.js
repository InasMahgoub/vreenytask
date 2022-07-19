import React, { Component } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { connect } from "react-redux";

class Wrapper extends Component {
  
  render() {

    let loginUser = () => {
      return {
        isLogged: this.props.isLogged,
        userName: this.props.userName
      }
    }

    return (
      <div className='wrapper'>
        <Header loginState={loginUser()}/>
        {this.props.children}
      <Footer />
    </div>
    )
  }
}

const getLoginState = (state) => {

  let loginState =  state.loggedIn
  let user = state.currentUser

  return {
    isLogged: loginState,
    userName: user
  }
}


export default connect(getLoginState)(Wrapper)
