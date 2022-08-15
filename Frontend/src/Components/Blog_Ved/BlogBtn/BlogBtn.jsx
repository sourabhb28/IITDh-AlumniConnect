import React from "react";
import "./BlogBtn.css";
const BlogBtn = (props) => {
    return (
        <a className="myButton" onClick={props.trigger}>
            {props.content}
        </a>
    );
};

export default BlogBtn;
