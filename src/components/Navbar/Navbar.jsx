import React from 'react'
import './Navbar.scss'
import { BackgroundWrap } from '../wrapper'
const Navbar = () => {
  return (
    <div className='navbar__wrapper'>

    <ul>
        <a>
    <li href='#header'>Home</li>
        </a>
    <a href='#about'>  <li>About</li></a>
    <a href='#projects'>        <li>Projects</li></a>
    <a href='#skills'>  <li>Skills</li></a>
      

      
        <li>
            <a href='#contact'>Contact
                </a></li>
    
    </ul>

    </div>
  )
}

export default Navbar