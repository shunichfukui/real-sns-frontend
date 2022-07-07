import React from 'react'

export default function OnlineFriend({ user }) {
  return (
    <li className="rightbarFried">
      <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className='rightbarProfileImg' />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">
        {user.username}
      </span>
    </li>
  )
}