import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Dashboard/Home";
import Category from "./Dashboard/Category";
import UploadPost from "./Dashboard/UploadPost";
import ManagePost from "./Dashboard/ManagePost";
import UploadSideAdvertise from './Dashboard/UploadSideAdvertise';
import EditPost from './Dashboard/EditPost';
// import NewsEdit from './Dashboard/NewsEdit';


const CenterBottom = () => {
  return (
    <div className='w-full h-[80vh] bg-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/upload-post" element={<UploadPost />} />
        <Route path="/manage-post" element={<ManagePost />} />
        <Route path="edit/:id" element={<EditPost />} />
        <Route path="/upload-advertise" element={<UploadSideAdvertise />} />
      </Routes>
    </div>
  )
}

export default CenterBottom