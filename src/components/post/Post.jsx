import { MoreVert } from '@mui/icons-material'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { format } from 'timeago.js';
import "./Post.css"


export default function Post({ post }) {
  const [likeCount, setLikeCount] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const changeLikeCount = () => {
    setLikeCount(isLiked ? likeCount -1 : likeCount +1);
    setIsLiked(!isLiked);
  }
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`)
      setUser(response["data"])
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className='post'>
      <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                <Link to={`/profile/${user._id}`}>
                  <img src={user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className='postProfileImg' />
                </Link>
                <span className="postUsername">{user.username}</span>
                <span className="postDate">{post.createdAt}</span>
              </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
          </div>
      </div>
      {/* 投稿内容 */}
      <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className='postImg' />
      </div>
      <div className="postBottom">
          <div className="postBottomLeft">
              <img src={PUBLIC_FOLDER + "/heart.png"} alt="" className='likeIcon' onClick={() => changeLikeCount()} />
              <span className="postLikeCounter">
                  {likeCount}人がいいねを押しました
              </span>
          </div>
          <div className="postBottomRight">
              <span className="postCommentText">
                  {post.comment}: コメント
              </span>
          </div>
      </div>
    </div>
  )
}
