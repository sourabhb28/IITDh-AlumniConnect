import React from "react";
import "./Blog.css";
const Blog = (props) => {
    return (
        <div className="main-container">
            <div className="upper-bar">
                <img src={props.ProfilePic}></img>
                <h2>{props.UserName}</h2>
            </div>
            <div className="blog-image">
                <img src={props.BlogPic}></img>
            </div>
            <div className="blog-preview">
                <h2>{props.BlogTitle}</h2>
                <p>{props.BlogPreview}</p>
            </div>
        </div>
    );
};

export default Blog;
