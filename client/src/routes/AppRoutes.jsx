import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ROUTES from "./Routes";
import CategoryPage from "../pages/CategoryPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Navigate to="/category/all" />} />
      <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />
    </Routes>
  );
}

export default AppRoutes;
