import React from 'react'
import Sidebar from '../../components/organisms/sidebar/Sidebar'
import Topbar from '../../components/organisms/topbar/Topbar'
import Timeline from '../../components/organisms/timeline/Timeline';
import Rightbar from '../../components/organisms/rightbar/Rightbar';
import "./Home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Timeline userId={'62c50465667ade1f92cb5b03'} />
        <Rightbar />
      </div>
    </>
  )
}