import React, { useEffect, useState } from "react";
import Minigrid from "minigrid";
import BlogBtn from "../BlogBtn/BlogBtn";
import Blog from "../Blog/Blog";
import data from "./MOCK_DATA.json";
import "./BlogPage.css";

const BlogPage = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const getWidth = () => {
        setWidth(window.innerHeight);
    };

    useEffect(() => {
        const grid = new Minigrid({
            container: ".blog-grid",
            item: ".blog-single",
            gutter: 20,
        });
        grid.mount();

        window.addEventListener("resize", () => {
            getWidth();
            grid.mount();
        });
    }, [width]);
    return (
        <div className="blog-page">
            <div className="blog-page-main">
                <div className="btn-container">
                    <BlogBtn content="Hello" />
                </div>
                <div className="blog-grid">
                    {data.map((one) => {
                        return (
                            <div className="blog-single">
                                <Blog
                                    ProfilePic={one.picture}
                                    UserName={one.user_name}
                                    BlogPic={one.blog_img}
                                    BlogTitle={one.blog_heading}
                                    BlogPreview={one.blog_preview}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
