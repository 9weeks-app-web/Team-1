import React from "react";
import HomePage from "pages/HomePage/HomePage";
import PortfolioPage from "pages/PortfolioPage/PortfoiloPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import MyPage from "pages/MyPage";
import Header from "components/Header";
import Chat from "pages/Chat";
import Footer from "components/Footer/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
