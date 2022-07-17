import React, { useContext, useEffect, useState } from 'react';
import "./Timeline.css";
import Share from '../../molecules/share/Share';
import Post from '../post/Post';
import axios from 'axios';
import { AuthContext } from '../../../state/AuthContext';

function Timeline({ userId }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = userId
        ? await axios.get(`/posts/profile/${userId}`)
        : await axios.get(`/posts/timeline/${user._id}`);

      setPosts(
        response["data"].sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      )
    };
    fetchPosts();
  }, [userId, user._id]);

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