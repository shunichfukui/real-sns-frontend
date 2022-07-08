import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';
import "./Topbar.css";

export default function Topbar() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <span className='logo'>Real sns</span>
      </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input type="text" className='searchInput' placeholder='何をお探しですか' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="topbarImg" className='topbarImg' />
      </div>
    </div>
  )
}
