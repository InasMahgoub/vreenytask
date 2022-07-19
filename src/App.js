import React from "react";
import Wrapper from "./components/Wrapper";
import Layout from "./components/Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
