import React from "react";
import HomePage from "pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
