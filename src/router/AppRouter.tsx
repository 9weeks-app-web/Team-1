import React from "react";
import HomePage from "pages/HomePage/HomePage";
import PortfolioPage from "pages/PortfolioPage/PortfoiloPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "pages/Auth/Login";
import RegisterSelect from "pages/Auth/registerSelect";
import MyPage from "pages/MyPage";
import Header from "components/Header";
import Chat from "pages/Chat";
import Footer from "components/Footer/Footer";
import Community from "pages/Community";
import Register from "pages/Auth/Register";
import ProjectPage from "pages/ProjectPage/ProjectPage";
import RecruitPage from "pages/RecruitPage/RecruitPage";
import ProjectDetailPage from "pages/ProjectDetailPage/ProjectDetailPage";
import ProjectUploadPage from "pages/ProjectUploadPage/ProjectUploadPage";
import Alarm from "pages/Alarm";
import PortfolioModal from "components/Modal/PortfolioModal/PortfolioModal";
import RecruitDetailPage from "pages/RecruitDetailPage/RecruitDetailPage";
import AllSubPage from "pages/Community/AllSubPage/AllSubPage";
import FreeTopicSubPage from "pages/Community/FreeTopicSubPage/FreeTopicSubPage";
import ReviewsSubPage from "pages/Community/ReviewsSubPage/ReviewsSubPage";
import WorriesSubPage from "pages/Community/WorriesSubPage/WorriesSubPage";
import QnASubPage from "pages/Community/QnASubPage/QnASubPage";
import CommunityDetailPage from "pages/Community/CommunityDetailPage/CommunityDetailPage";
import ScrollToTop from "./ScrollToTop";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterSelect />} />
        <Route path="/registerform" element={<Register />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/alarm" element={<Alarm />} />

        <Route path="/chat" element={<Chat />} />

        <Route path="/community/:id" element={<CommunityDetailPage />} />
        <Route path="/community" element={<Community />}>
          <Route index element={<AllSubPage />} />
          <Route path="free" element={<FreeTopicSubPage />} />
          <Route path="qna" element={<QnASubPage />} />
          <Route path="worries" element={<WorriesSubPage />} />
          <Route path="reviews" element={<ReviewsSubPage />} />
        </Route>

        <Route path="/project">
          <Route path="" element={<ProjectPage />} />
          <Route path="upload" element={<ProjectUploadPage />} />
          <Route path=":id" element={<ProjectDetailPage />} />
        </Route>

        <Route path="/recruit">
          <Route path="" element={<RecruitPage />} />
          <Route path=":id" element={<RecruitDetailPage />} />
        </Route>
      </Routes>
      <PortfolioModal />
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
