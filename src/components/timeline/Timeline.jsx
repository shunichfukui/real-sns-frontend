import React, { useEffect, useState } from 'react';
import "./Timeline.css";
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';

function Timeline({ userId }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = userId
        ? await axios.get(`/posts/profile/${userId}`)
        : await axios.get("/posts/profile/62c50465667ade1f92cb5b03");

      setPosts(response["data"])
    };
    fetchPosts();
  }, [userId]);

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}

export default Timeline