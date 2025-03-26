import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/config"; // ✅ Base URL import kiya

const EditPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [newPost, setNewPost] = useState(location.state?.data || null);

  useEffect(() => {
    console.log("Post ID:", id); // ✅ Check if ID is correct

    if (!newPost) {
      fetch(`${BASE_URL}/api/news/posts/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Post not found");
          }
          return res.json();
        })
        .then((data) => setNewPost(data))
        .catch((err) => {
          console.error("Error fetching post:", err);
          alert("Post not found!");
          navigate("/dashboard/manage-post");
        });
    }
  }, [id, newPost, navigate]);

  return newPost ? (
    <div>
      <h1>Edit Post</h1>
      <input value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default EditPost;
