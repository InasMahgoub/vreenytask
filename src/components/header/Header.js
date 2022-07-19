import React, {Component} from "react";
import { connect } from "react-redux";

class Header extends Component {
 

  render() {

    let loginData = this.props.loginState;

    console.log(this.props)
    const total = this.props.totalCart
    let isLogged = loginData.isLogged
    let currentUser = loginData.userName
    return (
      <nav className="navbar navbar-expand-lg bg-gray">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Vreeny
        </a>
        <button
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          >
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
          </ul>
        </div>


        <div className="d-flex">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/cart"><i className="bi bi-cart"></i> <span className="badge rounded-pill bg-theme-dark">{total}</span></a>
                </li>

                {isLogged? (
                  <>
                    <li className="nav-item" id="logout-link">
                    <a className="nav-link" href="/">{currentUser}</a>
                    </li>
                    <li className="nav-item" id="logout-link">
                        <a className="nav-link" href="/login">Logout</a>
                    </li>
                  </>
                ):(
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                )}


                
                
            </ul>
        </div>
      </div>
    </nav>
    )
  }
  
  
}

const getState = (state) => {

  const allItems =  state.cart;
  // let loginState =  state.loggedIn;
  // const currentUser = state.currentUser
  let total = 0;

  for (let i = 0; i < allItems.length; i++) {
        total = total+allItems[i].amount;
  }

  return {
    totalCart: total,
    // isLogged: loginState,
    // currentUser
  }
}

export default connect(getState)(Header)

