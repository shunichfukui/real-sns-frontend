import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Home className='sidebarIcon' />
            <span className='sidebarListItemText'>
              ホーム
            </span>
          </li>
          <li className='sidebarListItem'>
            <Search className='sidebarIcon' />
            <span className='sidebarListItemText'>
              検索
            </span>
          </li>
          <li className='sidebarListItem'>
            <Notifications className='sidebarIcon' />
            <span className='sidebarListItemText'>
              通知
            </span>
          </li>
          <li className='sidebarListItem'>
            <MessageRounded className='sidebarIcon' />
            <span className='sidebarListItemText'>
              メッセージ
            </span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>
              ブックマーク
            </span>
          </li>
          <li className='sidebarListItem'>
            <Person className='sidebarIcon' />
            <span className='sidebarListItemText'>
              プロフィール
            </span>
          </li>
          <li className='sidebarListItem'>
            <Settings className='sidebarIcon' />
            <span className='sidebarListItemText'>
              設定
            </span>
          </li>
        </ul>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="友達1" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Shin maikeru</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="友達2" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Tanaka maikeru</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="友達3" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Maikeru maikeru</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar