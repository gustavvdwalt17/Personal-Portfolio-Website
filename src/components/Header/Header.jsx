import React from 'react'
import { motion } from 'framer-motion'
import './Header.scss'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import { BackgroundWrap } from '../wrapper'
const Header = () => {
  return (
    <motion.div 
          whileInView={{x:[-100,0], opacity:[0,1]}}
      transition={{duration: 0.5}}
    className='header__div'>
        <div className='text__div'>
            <div className='text__div_1'>  <h1>Hi, I'm Gustav 👋</h1></div>
            <div className='text__div_1'>     <h2>Full Stack Developer</h2></div>
      
   

        <button >
          
          <a href='#contact'>Contact me</a></button>

     
</div>

        <div className='skills__div'>
            <div className='skills__div-single' >
                <img src={javascript} alt="" /> 
            </div>
            <div className='skills__div-single'>
 <img src={react} alt="" /> 
            </div>
            <div className='skills__div-single'>
 <img src={python} alt="" /> 

            </div>
        </div>
    </motion.div>
  )
}

export default BackgroundWrap(Header,'blue','header')