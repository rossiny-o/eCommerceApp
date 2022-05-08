import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./pages/login";
import { Cart } from "./pages/cart";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="cart" element={<Cart />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
