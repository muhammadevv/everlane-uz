import React from 'react'
import Sidebar from './components/Sidebar'
import Aside from './components/Aside'

function Collections() {
  return (
    <div className='collections'>
      <div className="container">
        <div className="collections-wrapper">
          <Sidebar />
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default Collections