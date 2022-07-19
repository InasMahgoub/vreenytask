import React, { Component } from "react"
import { connect } from "react-redux"

class Product extends Component {
  render() {
    // console.log(this.props.addItemToCart);
    const prpductItem = {
      "id": this.props.id,
      "title": this.props.title,
      "thumbnail": this.props.thumbnail,
      "category": this.props.category,
      "price": this.props.price,
    };

    const productAddToChart = (id, title, price) => {
      console.log(id)
      this.props.addItemToCart(id, title, price)
    };

    return (
      <div className="col-md-4 col-sm-6 col-12">
        <div className="card">
          <div
            style={{
              backgroundImage: `url(${prpductItem.thumbnail})`,
              WebkitBackgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{prpductItem.title}</h5>
            <p>{prpductItem.price} SDG</p>
            <p>Category: <a href="/">{prpductItem.category}</a></p>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              className="btn btn-primary bg-theme"
              onClick={() => productAddToChart(prpductItem.id, prpductItem.title, prpductItem.price)}
            >
              <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps  = (dispatch) => {
  return{
    addItemToCart: (id, title, price) => { dispatch({type: 'Add_ITEM_To_CART', id, title, price}) }
  };
}

export default connect(null, mapDispatchToProps )(Product)
