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
      

      
        <a href='#contact'>
            <li >Contact
                </li></a>
    
    </ul>

    </div>
  )
}

export default Navbar