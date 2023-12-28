import React from "react";
import HomePage from "pages/HomePage/HomePage";
import PortfolioPage from "pages/PortfolioPage/PortfoiloPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
