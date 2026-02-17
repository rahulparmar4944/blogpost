
import Navbar from '../components/Navbar';
import { Navigate, useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import './Dashboard.css'
import {useEffect, useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

   const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  
    useEffect(() => {
    fetchData();
  }, []);

const handleLogout = () => {

    console.log("click from dashboard");
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    // localStorage.clear()
    navigate("/login");
  };
  const handleEdit = (postId) => {
    Navigate(`/edit-post/${postId}`);
}

const handlePost = (postId) => {
    Navigate(`/post/${postId}`);
}
  return (

    <div className="dashboard-page">

       <Navbar 
       
       onLogout={handleLogout} />

      <main className="dashboard-main">
        <div className="dashboard-welcome">
          <div className="welcome-text">
            <h1>Wellcome to your Dashboard</h1>
            <p>Manage your posts, track engagement,and connect with your audience</p>
          </div>
        </div>

        <div className="dashboard-stats-overview">
          <div className="dash-card">
            <h3>Total Posts</h3>
            <span className="dash-number">10</span>
          </div>

          <div className="dash-card">
            <h3>Total Stories</h3>
            <span className="dash-number">5</span>
          </div>

          <div className="dash-card">
            <h3>Community Posts</h3>
            <span className="dash-number">10</span>
          </div>
        </div>

        <section className="posts-section">
          <div className="section-header">
            <h2 className="section-title">Recent Feed</h2>
            <button className="create-shortcut-btn">
              <FaPlus /> New Post
            </button>
          </div>

          <div className="posts-grid">
            <div className="post-card">
            {posts.map((post) => (
              <><div className="post-image-container">
                <img
                  src={post.image}
                  alt="Post"
                  className='post-card-image' />

                <div className="post-actions">
                  <button className="action-btn edit-btn" title="Edit Post" onClick={() => handleEdit(post.id)}>
                    <MdEdit size={22} color="#ffffff" />
                  </button>

                  <button className="action-btn delete-btn" title="Delete Post">
                    <MdDelete size={22} color="#ffffff" />
                  </button>
                </div>
              </div><div className="post-card-content">
                  <div className="post-meta">
                    <span className="post-author">By admin</span>
                    <span className="post-data">Recent</span>
                  </div>

                  <h3 className="post-card-title">{post.title}</h3>

                  <p className="post-card-description">
                    {post.description}
                  </p>

                  <button className="read-more-btn" onClick={() => handlePost(post.id)}>
                    Read More
                  </button> 
                </div>
                </>

            ))}
             </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
