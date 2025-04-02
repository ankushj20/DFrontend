import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import axios from "axios";
import Login from "./Components/Authentication/Login";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
import UploadPost from "./Components/Dashboard/UploadPost";
import Category from "./Components/Dashboard/Category";
import ManagePosts from "./Components/Dashboard/ManagePost";
import EditPost from "./Components/Dashboard/EditPost";
import UploadSideAdvertise from "./Components/Dashboard/UploadSideAdvertise";
// import NewsEdit from "./Components/Dashboard/NewsEdit";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{ 
    var auth = localStorage.getItem("IsAuthenticated");
    if(auth === "true"){
      setIsAuthenticated(true);
      setLoading(false)
    } 
    else{
      setIsAuthenticated(false)
      setLoading(false)
    }
    //{
  //   axios
  //     .get("http://localhost:5100/api/auth/check-auth", { withCredentials: true })
  //     .then((response) => setIsAuthenticated(response.data.authenticated))
  //     .catch(() => setIsAuthenticated(false))
  //     .finally(() => setLoading(false));
  // }, 
  },[]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />

      {/* Dashboard Protected Routes */}
      <Route path="/dashboard/*" element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/" />} >
        <Route path="upload-post" element={<UploadPost />} />
        <Route path="category" element={<Category />} />
        <Route path="manage-post" element={<ManagePosts />} />
        <Route path="edit/id" element={<EditPost />} />
        {/* <Route path="edit/:id" element={<NewsEdit />} /> */}
        <Route path="upload-advertise" element={<UploadSideAdvertise />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<div className="text-center text-xl mt-10">404 - Page Not Found</div>} />
    </Routes>
  );
};

// ✅ Wrap Router properly
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
