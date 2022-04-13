import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import Post from "./Post/Post.js";
import "./Postview.css";

const Postview = () => {
  const [posts, setPosts] = useState([]);

  const postViewAsync = async () => {
    const response = await fetch("http://localhost:3004/user");
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    postViewAsync();
  }, []);

  return (
    <div className="Postview">
      <Header />
      {posts.map((post, index) => (
        <Post key={index} config={post} />
      ))}
    </div>
  );
};
export default Postview;
