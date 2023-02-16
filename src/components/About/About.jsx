import React from 'react'
import { BackgroundWrap } from '../wrapper'
import './About.scss'
const About = () => {
  return (
    <div>
      <h1 className='app__flex'>About me</h1>
      <h4>Born in South Africa, Pretoria i have always had a passion of computers and technologies.</h4>
    <h4>I enjoy playing games like r6 and strategic games like chess.</h4>
    <h4>I enjoy spending time with friends and family.</h4>
    <button className='btn'>Resume</button>
    <button className='btn'>
      
      <a className='a-tag' href='#contact'>Hire me</a></button>
    </div>
  )
}

export default BackgroundWrap(About,'white','about')