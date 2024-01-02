import React from "react";
import HomePage from "pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
=======
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import MyPage from "pages/MyPage";
import Header from "components/Header";
import Chat from "pages/Chat";
>>>>>>> Stashed changes

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< Updated upstream
=======
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/chat" element={<Chat />} />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
