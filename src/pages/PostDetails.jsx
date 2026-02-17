import React from 'react'
import Navbar from '../components/Navbar';
import "./PostDetails.css";
import { FaArrowLeft, FaUser, FaCalendarAlt, FaClock} from 'react-icons/fa';

const PostDetails = () => {
  return (
    <div className="post-details"> 
    <Navbar />

    <main className="post-details-container">

        <button className="back-btn">
            <FaArrowLeft /> Back to Feed
        </button>

        <article className="full-post">
            <header className="post-header">
                <div className="post-category"> Journal </div>

                <h1 className="post-full-title">
                    Sample Blog Post Title
                </h1>

                <div className="post-author-meta">
                    <div className="author-info">
                        <div className="author-avatar">
                            A
                        </div>

                        <div>
                            <span className="author-name">Admin</span>

                            <div className="post-data-row">
                                <span>
                                    <FaCalendarAlt /> 16/02/2026 
                                </span>

                                <span className="dot"></span>

                                <span>
                                    <FaClock /> 5 Min Read
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="post-featured-image">
                <img 
                    src="" 
                    alt="Post"
                />
            </div>

            <div className="post-body">
                <p>
                    This is a static blog post content example.
                    You can keep your full UI design withut any JavaScript logic.
                </p>

                <p>
                    This layout structure remains exactly the same as your dynamic
                    but now it works as a pure static UI component.
                </p>
            </div>

            <footer className="post-footer">
                <div className="post-share">
                    <span>Share this story: </span>
                    <div className="share-button">
                        <button className="share-btn">Twitter</button>
                        <button className="share-btn">LinkedIn</button>
                        <button className="share-btn">Link</button>
                    </div>
                </div>
            </footer>
        </article>
    </main>
    </div>
  )
}

export default PostDetails 
 