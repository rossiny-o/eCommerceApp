import React from "react";
import "./Main.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductPage } from "./pages/ProductPage";

function Main() {
  return (
    <div>
      <Header className="mb-5 pb-2" />
      <Routes>
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default Main;
