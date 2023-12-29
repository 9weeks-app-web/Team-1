import React from "react";
import HomePage from "pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
