import React from "react";
import HomePage from "pages/HomePage/HomePage";
import PortfolioPage from "pages/PortfolioPage/PortfoiloPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import MyPage from "pages/MyPage";
import Header from "components/Header";
import Footer from "components/Footer/Footer";
import ProjectPage from "pages/ProjectPage/ProjectPage";
import CommunityPage from "pages/CommunityPage/CommunityPage";
import RecruitPage from "pages/RecruitPage/RecruitPage";
import ProjectDetailPage from "pages/ProjectDetailPage/ProjectDetailPage";

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
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/project">
          <Route path="" element={<ProjectPage />} />
          <Route path=":id" element={<ProjectDetailPage />} />
        </Route>
        <Route path="/recruit" element={<RecruitPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
