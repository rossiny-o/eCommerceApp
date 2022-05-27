import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./pages/login";
import { Cart } from "./pages/cart";
import { PastelBird } from "./pages/PastelBird";
import { HomelessBird } from "./pages/HomelessBird";
import { ElephantGrave } from "./pages/ElephantGrave";
import { ElephantHorns } from "./pages/ElephantHorns";
import {Elephlower} from "./pages/Elephlower";
import {FacialFeatures} from "./pages/FacialFeatures";
import {ThinkingThinker} from "./pages/ThinkingThinker";
import {Hamster} from "./pages/Hamster";
import {GallopingHorse} from "./pages/GallopingHorse";
import {VforVendetta} from "./pages/VforVendetta";
import {SheepInWolfClothing} from "./pages/SheepInWolf";
import {FlowerFox} from "./pages/FlowerFox";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/product/pastelbird/*" element={<PastelBird/>}/>
      <Route path="/product/homelessbird/*" element={<HomelessBird/>}/>
      <Route path="/product/elephantgrave/*" element={<ElephantGrave/>}/>
      <Route path="/product/elephanthorns/*" element={<ElephantHorns/>}/>
      <Route path="/product/elephlower/*" element={<Elephlower/>} />
      <Route path="/product/facialfeatures/*" element={<FacialFeatures/>} />
      <Route path="/product/thinkingthinker/*" element={<ThinkingThinker/>} />
      <Route path="/product/hamster/*" element={<Hamster />} />
      <Route path="/product/gallopinghorse/*" element={<GallopingHorse/>} />
      <Route path="/product/vforvendetta/*" element={<VforVendetta/>} />
      <Route path="/product/sheepinwolfclothing/*" element={<SheepInWolfClothing/>} />
      <Route path="/product/flowerfox/*" element={<FlowerFox/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
