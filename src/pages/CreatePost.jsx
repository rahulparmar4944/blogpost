import React from "react";
import Navbar from "../components/Navbar";
import {
  FaHeading,
  FaUser,
  FaLink,
  FaCloudUploadAlt,
  FaTimes,
  FaRegPaperPlane,
} from "react-icons/fa";
import "./CreatePost.css";
import { useEffect, useState } from "react";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    imageUrl: "",
    imageType: "url",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "title is required.";
    } else if (formData.title.length < 6) {
      newErrors.title = "Minimum 6 character required.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "description is required.";
    } else if (formData.description.length <= 6) {
      newErrors.description = "Minimum 6 character required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  const handleFileTypeChange = (type) => {
    setFormData((prev) => ({ ...prev, imageType: type }));
    if (type === "url") {
      setImagePreview(formData.imageUrl);
    } else {
      setImagePreview(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataUrl(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.currect.click();
  };

  const removeImage = () => {
    setImagePreview(null);
    if(formData.imageType === 'url') {
        setFormData(prev => ({ ...prev, imageUrl: ''}));
    }
  }

  return (
    <div className="create-post-page">
      <Navbar />

      <div className="create-post-container">
        <header className="form-header">
          <h1>Create New Post</h1>
          <p>Share your thoughts and stories with the world</p>
        </header>

        <div className="post-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Post Title</label>
              <div className="input-wrapper">
                <FaHeading className="input-icon" />
                <input
                  type="text"
                  name="title"
                  value={formData?.title}
                  className="form-control"
                  placeholder="Enter a catchy title..."
                  onChange={handleChange}
                />
                {errors.title && (
                  <span className="error-msg">{errors.title}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Author Name</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="author"
                  value={formData?.author}
                  className="form-control"
                  placeholder="Author name"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData?.description}
                className="form-control"
                placeholder="what's on your mimnd? write your story here"
                onChange={handleChange}
              />
              {errors.description && (
                <span className="error-msg">{errors.description}</span>
              )}
            </div>

            <div className="form-group">
              <label>Cover Image</label>
              { !imagePreview ? (
                <>
                  <div className="image-source-tags">
                    <button
                      type="button"
                      className={`tab-btn ${formData.imageType === "url" ? "active" : ""}`}
                      onClick={() => handleFileTypeChange("url")}
                    >
                      Image URL
                    </button>

                    <button
                      type="button"
                      className={`tab-btn ${formData.imageType === "file" ? "active" : ""}`}
                      onClick={() => handleFileTypeChange("file")}
                    >
                      Upload File
                    </button>
                  </div>
                  {formData.imageType === "url" ? (
                    <div className="input-wrapper">
                      <FaLink className="input-icon" />
                      <input
                        type="url"
                        name="imageUrl"
                        className="form-control"
                        placeholder="Paste image URL here (e.g. http://...)"
                        value={formData.imageUrl}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div className="image-upload-area">
                      <FaCloudUploadAlt className="upload-icon" />
                      <p>click to upload image from your device</p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="image-preview-container">
                  <img src={imagePreview} alt="Preview" className="image-preview" />
                  <button type="button" className="remove-image-btn">
                    <FaTimes />
                  </button>
                  /
                </div>
              )}

            </div>

            <div className="form-actions-row">
              <button type="submit" className="submit-btn">
                <FaRegPaperPlane /> Publish Post
              </button>

              <button type="button" className="cancel-btn">
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
