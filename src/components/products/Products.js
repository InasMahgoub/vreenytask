import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";

import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All Products');
  const [filteredProducts, setFilterdProducts] = useState([]);

  const getData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setProducts(myJson.products);
      });
  };

  useEffect(() => {
    getData();
  }, [selectedOption]);

  // Get Categories

  let allCategoriesList = [];

  for (let i = 0; i < products.length; i++) {
    allCategoriesList.push(products[i].category);
  }

  // Filter unique categories

  let uniqueCategories = [...new Set(allCategoriesList)];

  // Set Select Options intial value

  let options = [{ value: 0, label: "All Products" }];

  // Set Select Options

  for (let i = 1; i <= uniqueCategories.length; i++) {
    options.push({ value: i, label: uniqueCategories[i-1] });
  }

  // Filter method triggerd on select change

  const filterProducts = (e) => {
    let selectedCat = e.value;
    console.log(selectedCat);
    setSelectedOption(options[selectedCat].label);
    console.log(selectedOption);

    var selProducts = [];

    if (selectedOption === "All Products") {
      selProducts = products;
    } else {
      selProducts = products.filter(function (product) {
        return product.category === selectedOption;
      });
    }

    setFilterdProducts(selProducts);
  };

  let ProductsList = []

  if(selectedOption === 'All Products') {
    ProductsList = products;
  }else {
    ProductsList = filteredProducts;
  }

  const mappedProductsList = ProductsList.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      thumbnail={product.thumbnail}
      category={product.category}
    />
  ));

   
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 filter-row">
          <div className="col-md-4 offset-md-8">
            <Select
              options={options}
              id="select"
              onChange={(e) => filterProducts(e)}
              defaultValue={options[0]}
              isClearable
            />
          </div>
        </div>
      </div>
      <div className="row">{mappedProductsList}</div>
    </div>
  );
}
