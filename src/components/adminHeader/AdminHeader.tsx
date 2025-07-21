import ToggleSwitch from '@/components/ToggleSwitch/ToggleSwitch'
import StyleContext from '@/contexts/StyleContext'
import type { StyleContextType } from '@/contexts/StyleContext'
import { useContext } from 'react'
import Headroom from 'react-headroom'

const AdminHeader = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType
  return (
    <Headroom>
      <header className={isDark ? 'dark-menu header' : 'header'}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          {/* <span className="logo-name">{greeting.username}</span> */}
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" style={{ color: 'white' }}>
          <span className="sr-only">Toggle menu</span> {/* Hidden for sighted users */}
          <span className={isDark ? 'navicon navicon-dark' : 'navicon'} />
        </label>

        <ul className={isDark ? 'dark-menu menu' : 'menu'}>
          {/* {viewSkills && (
            
          )} */}
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#talks">Talks</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          {/* {viewExperience && (
            
          )} */}
          {/* {viewOpenSource && (
            
          )} */}
          {/* {viewAchievement && (
            
          )} */}
          {/* {viewBlog && (
            
          )}
          {viewTalks && (
           
          )}
          {viewResume && (
           
          )} */}

          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  )
}

export default AdminHeader
