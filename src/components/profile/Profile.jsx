import React from 'react'
import "./Profile.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/3.jpeg" alt="" className='profileCoverImg' />
                    <img src="assets/post/1.jpeg" alt="" className='profileUserImg' />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>shin code</h4>
                    <span className="profileInfoDesc">udemy講師をしてます</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Timeline />
                <Rightbar type={'profile'} />
            </div>
        </div>
      </div>
    </>
  )
}
