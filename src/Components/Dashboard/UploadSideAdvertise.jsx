import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../utils/config";

const UploadSideAdvertise = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("adImage", selectedImage);

    try {
      const response = await axios.post(`${BASE_URL}/api/ads/upload-ad`, formData);
      if (response.data.success) {
        setShowModal(true);
        setSelectedImage(null);
        setPreview(null);
      }
    } catch (error) {
      console.error("Error uploading ad:", error);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 px-4 py-12">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Upload Advertisement</h2>

        {/* Image Upload Box */}
        <div
          className="border-2 border-dashed border-green-500 p-6 rounded-lg cursor-pointer hover:bg-green-50"
          onClick={() => document.getElementById("file-input").click()}
        >
          <input
            type="file"
            id="file-input"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          {preview ? (
            <img
              src={preview}
              alt="Advertisement Preview"
              className="w-full max-h-64 object-contain rounded-md"
            />
          ) : (
            <p className="text-gray-600">Click or Drag to Select Image</p>
          )}
        </div>

        {/* Upload Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          disabled={!selectedImage}
        >
          Upload
        </button>
      </div>

      {/* Upload Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
            <h2 className="text-xl font-bold text-green-600 mb-4">
              🎉 Advertisement Uploaded Successfully!
            </h2>
            <p>Your advertisement has been uploaded.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSideAdvertise;
