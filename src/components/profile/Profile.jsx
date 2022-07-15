import React, { useState, useEffect } from 'react'
import "./Profile.css"
import axios from 'axios';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';
import { useParams } from "react-router-dom";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const userId = useParams().userId;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${userId}`)
      setUser(response["data"])
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src={PUBLIC_FOLDER + user.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"} alt="" className='profileCoverImg' />
                    <img src={PUBLIC_FOLDER + user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className='profileUserImg' />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Timeline userId={user._id} />
                <Rightbar user={user} />
            </div>
        </div>
      </div>
    </>
  )
}
