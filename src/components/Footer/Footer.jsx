import React from 'react'
import './Footer.scss'
import { BackgroundWrap } from '../wrapper'
import {AiFillLinkedin,AiFillGithub,AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer__container' >
        <h3 style={{color:'white'}} className='app__flex name'>Gustav vd Walt</h3>
<div className='icon__wrapper'>
        <div className='icon__wrapper-child'>

       <a href='https://github.com/gustavvdwalt17' target='_blank'> 
       <AiFillGithub style={{color:'white'}}/>     
       </a>  
          </div>
        <div className='icon__wrapper-child'>
              <a href='https://www.linkedin.com/in/gustav-van-der-walt-31a58a232/' target='_blank'> 
          <AiFillLinkedin style={{color:'white'}}/>
          </a>
          </div>

        <div className='icon__wrapper-child'>
          <a href='https://www.instagram.com/gustav_vd_walt17' target='_blank'>
          <AiFillInstagram style={{color:'white'}}/>
          </a>
          </div>
    </div>
    </div>
  )
}

export default BackgroundWrap(Footer)