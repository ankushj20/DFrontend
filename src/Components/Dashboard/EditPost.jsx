import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/config";

const EditPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState(null); // ✅ Initialize properly

  useEffect(() => {
    console.log("Post ID:", id); // ✅ Check if ID is correct

    if (!location.state?.data) {  // ✅ Check if data exists in state
      fetch(`${BASE_URL}/api/news/posts/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Post not found");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Fetched Post Data:", data); // ✅ Debugging
          setNewPost(data);
        })
        .catch((err) => {
          console.error("Error fetching post:", err);
          alert("Post not found!");
          navigate("/dashboard/manage-post");
        });
    } else {
      setNewPost(location.state.data); // ✅ Use state data if available
    }
  }, [id, navigate]);

  return newPost ? (
    <div>
      <h1>Edit Post</h1>
      <input
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
    </div>
  ) : (
    <p>Loading...</p> // ✅ Show loading state
  );
};

export default EditPost;
