import React from 'react'
import "./Rightbar.css"
import { Users } from '../../dummyData';
import OnlineFriend from '../online_friend/OnlineFriend';

function Rightbar({ type }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightBar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src={PUBLIC_FOLDER + "/star.png"} alt="" className='starImg' />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中
          </span>
        </div>
        <img src={PUBLIC_FOLDER + "/event.jpeg"} alt="" className='eventImg' />
        <h4 className='rightbarTitle'>オンライン中の友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <OnlineFriend user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img src={PUBLIC_FOLDER + "/promotion/promotion1.jpeg"} alt="" className='rightbarPromotionImg' />
        <p className='promotionName'>ショッピング</p>
        <img src={PUBLIC_FOLDER + "/promotion/promotion2.jpeg"} alt="" className='rightbarPromotionImg' />
        <p className='promotionName'>カーショップ</p>
        <img src={PUBLIC_FOLDER + "/promotion/promotion3.jpeg"} alt="" className='rightbarPromotionImg' />
        <p className='promotionName'>新高度株式会社</p>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身：</span>
            <span className="rightbarInfoKey">福岡</span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className='rightbarFollowingImg' />
              <span className="rightbarFollowingName">Shin code</span>
            </div>
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/2.jpeg"} alt="" className='rightbarFollowingImg' />
              <span className="rightbarFollowingName">Tanaka code</span>
            </div>
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/3.jpeg"} alt="" className='rightbarFollowingImg' />
              <span className="rightbarFollowingName">Tom code</span>
            </div>
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/4.jpeg"} alt="" className='rightbarFollowingImg' />
              <span className="rightbarFollowingName">Maikeru code</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {type === "profile" ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar