import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  let ProductsList = [];

  const getData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setProducts(myJson.products);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  

  if (products !== undefined) {
    const featuredProducts = [...products].slice(0,6)
    ProductsList = featuredProducts.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        thumbnail={product.thumbnail}
        category={product.category}
      />
    ));
  }

  return (
    <div className="home-products pt-3"> 
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>Featured Products</h3>
        </div>
      </div>
      <div className="row">{ProductsList}</div>
    </div>
    </div>
  );
}
