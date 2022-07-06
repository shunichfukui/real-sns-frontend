import React from 'react'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='logo'>Real sns</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input type="text" className='searchInput' placeholder='何をお探しですか' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">
          1
        </div>
        <div className="topbarIconItem">
          2
        </div>
        <img src="/assets/person/1.jpeg" alt="topbarImg" />
      </div>
    </div>
  )
}
