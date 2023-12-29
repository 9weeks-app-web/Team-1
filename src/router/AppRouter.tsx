import React from "react";
import HomePage from "pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "pages/MyPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
