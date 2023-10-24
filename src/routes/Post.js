import React, { useState, useEffect } from "react";
// import logo from '../logo.png';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Post({ match }) {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rk4qhz.csb.app/Explore/${pid}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
    // .then(json => setLoading(false))
  }, [id]);

  return (
    <div className="posts">
      <div className="post-container">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default Post;
