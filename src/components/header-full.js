import React from 'react'
// import { span } from 'react-router-dom'

import PrimaryPinkButton from './primary-pink-button'
import './header-full.css'

const HeaderFull = (props) => {
  return (
    <div className="header-full-header">
      <nav className="header-full-nav">
        <div className="header-full-container">
          <span to="/" className="header-full-navspan Large">
            UPAI
          </span>
          <div className="header-full-menu">
            <span to="/" className="header-full-navlink1 Large">
              Home
            </span>
            <span to="/profile" className="header-full-navlink2 Large">
              Profile
            </span>
            <span to="/coming-soon" className="header-full-navspan3 Large">
              Coming Soon
            </span>
          </div>
          <div className="header-full-container1">
            <div className="header-full-container2">
              <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
            </div>
            <svg viewBox="0 0 1024 1024" className="header-full-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderFull
