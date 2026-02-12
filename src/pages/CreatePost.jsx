import React from 'react'
import Navbar from '../components/Navbar'

const CreatePost = () => {
  return (
    <div className="create-post-page">
        <Navbar/>

        <div className="create-post-page">
            <header className="form-header">
                <h1>Create New Post</h1>
                <p>Share your thoughts and stories with the world</p>
            </header>

            <div className="post-form-card">
                <form>
                    <div className="form-group">
                        <label>Post Title</label>
                        <div className="input-wrapper">
                            <FaHeading className="input-icon"/>
                            <input 
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Enter a catchy title..." 
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Author Name</label>
                        <div className="input-wrapper">
                            <FaUser className="input-icon" />
                            <input 
                                type="text"
                                name="author"
                                className="form-control"
                                placeholder="Your Name"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea name="description" className="form-control" placeholder="what's on your mimnd? write your story here">

                        </textarea>
                    </div>

                    <div className="form-group">
                        <label>Cover Image</label>

                        <div className="image-source-tags">
                            <button type="button" className="tab-btn active">
                                Image URL
                            </button>

                            <button type="button" className="tab-btn">
                                U[pload File]
                            </button>
                        </div>

                        <div className="input-wrapper">
                            <FaLink className="input-icon" />
                            <input type="url" name="imageUrl" className="form-control" 
                                placeholder="Paste image URL here (e.g. http://..." 
                            />
                        </div>

                        <div className="image-upload-area">
                            <FaCloudUploadAlt className="upload-icon" />
                            <p>click to upload image from your device</p>
                        </div>

                        <div className="image-preview-container">
                            <img 
                                src="" 
                                alt="Preview" 
                                className="image-preview" 
                            />
                            <button type="button" className="remove-image-btn">
                                <FaTimes />
                            </button>
                        </div>
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
  )
}

export default CreatePost
