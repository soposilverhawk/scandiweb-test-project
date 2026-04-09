import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./Routes";
import Home from "../pages/home/Home";
import ClothesProductsListing from "../pages/clothesProductsListing/ClothesProductsListing";
import TechProductsListing from "../pages/techProductsListing/TechProductsListing";

function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CLOTHES} element={<ClothesProductsListing />} />
      <Route path={ROUTES.TECH} element={<TechProductsListing />} />
    </Routes>
  );
}

export default AppRoutes;
