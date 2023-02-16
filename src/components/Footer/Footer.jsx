import React from 'react'
import './Footer.scss'
import { BackgroundWrap } from '../wrapper'
import {AiFillLinkedin,AiFillGithub,AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <div>
        <h3 className='app__flex name'>Gustav vd Walt</h3>
<div className='icon__wrapper'>
        <div className='icon__wrapper-child'><AiFillGithub/></div>
        <div className='icon__wrapper-child'><AiFillLinkedin/></div>
        <div className='icon__wrapper-child'><AiFillInstagram/></div>
    </div>
    </div>
  )
}

export default BackgroundWrap(Footer,'white-footer')