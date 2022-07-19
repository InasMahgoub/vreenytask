import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {

  render() {
    console.log(this.props);

    let cartListItems = this.props.cart;

    const handleDeleteCartItem = (id) => {
      this.props.deleteItem(id);
    };

    const calcTotalCartPrice = (cartList) => {

      let total = 0;

      for (let i = 0; i < cartList.length; i++) {
        let itemPrice = cartList[i].price * cartList[i].amount;
        total = total + itemPrice;
        console.log(itemPrice, total);
      }

      return total;
    };

    let mapItemsList = [];

    if (cartListItems !== undefined) {
      mapItemsList = cartListItems.map((item) => (
        <tr key={item.id}>
          {/* <th >1</th> */}
          <td>{item.title}</td>
          {/* <td>{item.amount}</td> */}
          {/* <td>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-secondary"
                disabled={item.amount === 1 ? "disabled" : ""}
                onClick={() => handleMinusOne(item.itemId)}
              >
                -
              </button>
              <button type="button" className="btn btn-outline-secondary">
                {item.amount}
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => handlePlusOne(item.itemId)}
              >
                +
              </button>
            </div>
          </td> */}
          <td>{item.price * item.amount}</td>
          <td>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => handleDeleteCartItem(item.itemId)}
            >
              <i className="bi bi-bag-x"></i>
            </button>
          </td>
        </tr>
      ));
    }

    return (
      <div className="container">
        {cartListItems.length !== 0 ? (
          <>
            <div className="row pt-5 pb-3">
              <table className="table">
                <thead>
                  <tr>
                    {/* <th >#</th> */}
                    <th>Item</th>
                    {/* <th>Amount</th> */}
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{mapItemsList}</tbody>
              </table>
            </div>
            <div className="row">
              <h4 className="text-right">
                Total: {calcTotalCartPrice(cartListItems)} SDG
              </h4>
            </div>
          </>
        ) : (
          <div className="pt-5">
            <h1 className="text-center color-primary"><i className="bi bi-bag"></i></h1>
            <h5 className="text-center">Cart is Empty</h5>
          </div>
        )}
      </div>
    );
  }
}

const getCart = (state) => {
  return {
    cart: state.cart,
  };
};

const carItemsDispatch = (dispatch) => {
  return {
    deleteItem: (id) => { dispatch({ type: "DELETE_ITEM", id: id }) },
  };
};

// const increaseItemAmountDispatch = (dispatch) => {
//   return {
//     increaseAmount: (id) => { dispatch({ type: "INCREASE_AMOUNT", id: id }) }
//   };
// };

export default connect(getCart, carItemsDispatch)(Cart);
