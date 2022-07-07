import React from 'react'

export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="友達1" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
