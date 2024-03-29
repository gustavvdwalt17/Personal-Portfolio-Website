import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BackgroundWrap } from '../wrapper'
import  {PDFDownloadLink, Page} from '@react-pdf/renderer'
import './About.scss'
import cv from './my_cv.pdf'

const cvfile = 'http://localhost:3000/'
const About = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (


<div className='app__flex-col'>
      <h1 className='text__heading' >About me</h1>


      <motion.div
     animate={{ opacity: [0 ,1], y: [100, 0] }}
      exit={{opacity: [1,0]}}
transition={{ duration: .6 }}

  
      className='about__info' >


    {/* {isOpen && (
      <Modal  closeModal={setIsOpen} />
    )} */}
 


      <h4>Born in South Africa, Pretoria I have always had a passion for computers and technology.</h4>
    <h4>I enjoy playing games in my free time and working out.</h4>
    <h4>I enjoy spending time with friends and family.</h4> 


    {/* <motion.button 
onClick={()=>setIsOpen(true)}
         whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
    className='btn'><a   href="./my_cv_copy.pdf" download="./my_cv_copy.pdf">Resume</a></motion.button> */}


<div className='about__me-btn'>
<button className='btn'>
 <a href={cv} download="Resume">Cv</a>
</button>
 

    <button className='btn'>
      
      <a className='a-tag' href='#contact'>Hire me</a></button>
      </div>
  </motion.div>
    </div>
    
  )
}

export default BackgroundWrap(About,'darkblue-about','about')