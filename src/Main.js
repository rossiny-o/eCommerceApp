import React from "react";
import Products from "./components/Products";
import "./css/Main.css";
// import { ProductPage } from "./pages/ProductPage";
import { productData } from "./data-info";
import{ Header }from "./components/Header";


function Main() {
  const { products } = productData;
  return (
    <div>
      <Header/>
      {/* <ProductPage /> */}

      <div>
        <Products products={products}></Products>
      </div>
    </div>
  );
}

export default Main;
