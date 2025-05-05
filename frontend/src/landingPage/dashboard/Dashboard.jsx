import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import RightSidebar from './RightSidebar'

const Dashboard = () => {
  return (
    <div>
        <Topbar />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <MainContent />
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Dashboard
