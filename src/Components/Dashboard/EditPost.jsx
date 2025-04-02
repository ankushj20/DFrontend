// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import BASE_URL from "../utils/config";
// const EditPost = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [post, setPost] = useState({
//     title: "",
//     category: "",
//     images: [], // ✅ Multiple images ke liye array
//     details: "",
//   });

//   const [newImages, setNewImages] = useState([]); // ✅ Naye images store karne ke liye
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // 🔵 ✅ Fetch Single Post
//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/api/news/posts/${id}`);
//         if (!response.ok) {
//           throw new Error("Post not found");
//         }
//         let data = await response.json();
//         console.log("Fetched Post:", data);
//         setPost(data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching post:", err);
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   // 🔵 Input Change Handle
//   const handleChange = (e) => {
//     setPost({ ...post, [e.target.name]: e.target.value });
//   };

//   // 🔵 File Select Karne Ka Handler
//   const handleFileChange = (e) => {
//     setNewImages([...e.target.files]); // ✅ New selected images store karo
//   };

//   // 🔵 Edit Save Function
//   const handleSave = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("title", post.title);
//       formData.append("category", post.category);
//       formData.append("details", post.details);

//       // ✅ Purani images bhi bhej rahe hain
//       post.images.forEach((img) => formData.append("existingImages", img));

//       // ✅ Agar naye images select kiye hain to unko bhejo
//       newImages.forEach((img) => formData.append("images", img));

//       const response = await fetch(`${BASE_URL}/api/news/posts/${id}`, {
//         method: "PUT",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Post updated successfully!");
//         navigate("/dashboard");
//       } else {
//         throw new Error("Failed to update post");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Edit Post</h2>

//       <label className="block font-semibold">News Title:</label>
//       <input
//         type="text"
//         name="title"
//         value={post.title}
//         onChange={handleChange}
//         className="w-full border p-2 rounded mb-3"
//       />

//       <label className="block font-semibold">News Category:</label>
//       <input
//         type="text"
//         name="category"
//         value={post.category}
//         onChange={handleChange}
//         className="w-full border p-2 rounded mb-3"
//       />

//       <label className="block font-semibold">Existing Images:</label>
//       <div className="flex gap-2 mb-3">
//         {post.images.map((img, index) => (
//           <img key={index} src={img} alt="news" className="w-20 h-20 object-cover rounded" />
//         ))}
//       </div>

//       <label className="block font-semibold">Upload New Images:</label>
//       <input
//         type="file"
//         multiple
//         onChange={handleFileChange}
//         className="w-full border p-2 rounded mb-3"
//       />

//       <label className="block font-semibold">News Description:</label>
//       <textarea
//         name="details"
//         value={post.details}
//         onChange={handleChange}
//         className="w-full border p-2 rounded mb-3"
//         rows="4"
//       ></textarea>

//       <button
//         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         onClick={handleSave}
//       >
//         Save Changes
//       </button>
//     </div>
//   );
// };

// export default EditPost;












import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../utils/config";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    category: "",
    images: [], // ✅ Multiple images ke liye array
    details: "",
  });

  const [newImages, setNewImages] = useState([]); // ✅ Naye images store karne ke liye
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔵 ✅ Fetch Single Post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/news/posts/${id}`);
        if (!response.ok) {
          throw new Error("Post not found");
        }
        let data = await response.json();
        console.log("Fetched Post:", data);
        setPost(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // 🔵 Input Change Handle
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // 🔵 File Select Karne Ka Handler
  const handleFileChange = (e) => {
    setNewImages([...e.target.files]); // ✅ New selected images store karo
  };

  // 🔵 Edit Save Function
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("category", post.category);
      formData.append("details", post.details);

      // ✅ Purani images bhi bhej rahe hain
      post.images.forEach((img) => formData.append("existingImages", img));

      // ✅ Agar naye images select kiye hain to unko bhejo
      newImages.forEach((img) => formData.append("images", img));

      const response = await fetch(`${BASE_URL}/api/news/posts/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        alert("Post updated successfully!");
        navigate("/dashboard");
      } else {
        throw new Error("Failed to update post");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>

      <label className="block font-semibold">News Title:</label>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
      />

      <label className="block font-semibold">News Category:</label>
      <select
        name="category"
        value={post.category}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
      >
        <option value="" disabled>Select a category</option>
        <option value="खबर पालिका">खबर पालिका</option>
        <option value="मंत्री संतरी">मंत्री संतरी</option>
        <option value="कोर्ट कचेरी">कोर्ट कचेरी</option>
        <option value="अनुकर्णिया">अनुकर्णिया</option>
        <option value="अपना एमपी">अपना एमपी</option>
        <option value="यह भी पढिये">यह भी पढिये</option>
      </select>

      <label className="block font-semibold">Existing Images:</label>
      <div className="flex gap-2 mb-3">
        {post.images.map((img, index) => (
          <img key={index} src={`${BASE_URL}/${img}`} alt="news" className="w-20 h-20 object-cover rounded" />
        ))}
      </div>

      <label className="block font-semibold">Upload New Images:</label>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="w-full border p-2 rounded mb-3"
      />

      {/* ✅ New Image Preview */}
      {newImages.length > 0 && (
        <div className="flex gap-2 mb-3">
          {newImages.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-20 h-20 object-cover rounded"
            />
          ))}
        </div>
      )}

      <label className="block font-semibold">News Description:</label>
      <textarea
        name="details"
        value={post.details}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        rows="4"
      ></textarea>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditPost;
