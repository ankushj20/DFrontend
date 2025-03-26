import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/config"; // ✅ Base URL import kiya

const categories = [
  "खबर पालिका",
  "मंत्री संतरी",
  "कोर्ट कचेरी",
  "अनुकर्णिया",
  "अपना एमपी",
  "यह भी पढिये"
];

const Category = () => {
  const { category } = useParams(); // Get category from URL
  const navigate = useNavigate(); // Navigation ke liye
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!category) return; // Agar koi category select nahi to API call mat karo
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/api/posts?category=${category}`);
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error("Error fetching posts");
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      {/* 🔹 Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
        {categories.map((cat) => (
          <div
            key={cat}
            className="cursor-pointer bg-white rounded-lg shadow-md p-4 text-center border border-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-200"
            onClick={() => navigate(`/category/${cat}`)}
          >
            <h2 className="text-lg font-semibold">{cat}</h2>
          </div>
        ))}
      </div>

      {/* 🔹 Category Title */}
      {category && (
        <h1 className="text-2xl font-bold mb-4 rounded-lg text-white bg-black px-5 py-1 max-w-fit">
          Posts in Category: <span className="text-blue-500 capitalize">{category}</span>
        </h1>
      )}

      {/* 🔹 Posts List */}
      {loading ? (
        <p className="text-lg font-semibold">Loading posts...</p>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-md shadow-md p-4">
              <img
                src={post.images[0]}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">{post.details}</p>
              <div className="mt-4">
                <button
                  onClick={() => window.location.href = `/post/${post._id}`}
                  className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        category && <p className="text-lg font-semibold text-red-500">No posts found for this category.</p>
      )}
    </div>
  );
};

export default Category;
