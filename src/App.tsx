import "./scss/app.scss";
import React from "react";
import Home from "./pages/Home";
import NotFaund from "./pages/NotFaund";
import Basket from "./pages/Basket";
import FullPizza from "./pages/FullPizza";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Basket" element={<Basket />}></Route>
            <Route path="/:id" element={<FullPizza />}></Route>
            <Route path="*" element={<NotFaund />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
