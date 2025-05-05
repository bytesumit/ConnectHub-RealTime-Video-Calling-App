
import React from "react";
import "./App.css";
import ZoomNavbar from "./landingPage/ZoomNavbar";
import HomePage from "./landingPage/home/HomePage"
import Footer from "./landingPage/Footer";
import ChatWidget from "./landingPage/Chatwidget";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./landingPage/Auth/SignIn";
import SignUp from "./landingPage/Auth/SignUp";
import SupportPage from "./landingPage/support/SupportPage";
import PricingPage from "./landingPage/Pricing/PricingPage";
import SolutionPage from "./landingPage/solution/SolutionPage";
import HomePageProfile from "./HomePage/HomePageProfile";
import JoinMeeting from "./landingPage/JoinMetting/joinMeeting";
import CreateMeeting from "./landingPage/meeting/CreateMeeting";
import MeetingRoom from "./landingPage/meeting/MeetingRoom";
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "./user/UserProfile";
import ResourcesPage from "./landingPage/resources/ResourcesPage";
import FutureAIEnhancements from "./landingPage/ai/FutureAIEnhancements";
import FutureProducts from "./landingPage/products/FutureProducts";
import ContactSales from "./landingPage/products/ContactSales";
import AboutPage from "./landingPage/about/AboutPage";
import VideoMeetComponent from "./Home/VideoMeet";

const App = () => {
  return (
    <Router>
      <ZoomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Support" element={<SupportPage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Solution" element={<SolutionPage />} />
        <Route path="/resources" element={<ResourcesPage/>} />
        <Route path="/ai" element={<FutureAIEnhancements/>} />
        <Route path="/products" element={<FutureProducts />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/About" element={<AboutPage />} />


        <Route
          path="/user/:UserId"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />


        <Route
          path="/Profile/:UserId"
          element={
            <ProtectedRoute>
              <HomePageProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/join"
          element={
            <ProtectedRoute>
              <JoinMeeting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/meeting/:meetingdId"
          element={
            <ProtectedRoute>
           <VideoMeetComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/meeting/create"
          element={
            <ProtectedRoute>
              <CreateMeeting />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ChatWidget />
      <Footer />
    </Router>
  );
};

export default App;
