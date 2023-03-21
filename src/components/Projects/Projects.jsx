import React from 'react'
import '../../App.scss'
import './Projects.scss'
import { motion } from 'framer-motion'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import about from '../assets/about01.png'
import wordle from '../assets/Capture.JPG'
import eduvos from '../assets/Eduvos.JPG'
import e_commerce from '../assets/e_commerce.jpg'
import { BackgroundWrap } from '../wrapper'
const Projects = () => {
  return (
    <motion.div
              whileInView={{x:[-100,0], opacity:[0,1]}}
      transition={{duration: 0.5}}
    className='app__flex-col'>
            <h1 style={{color:'white'}} >Projects</h1>

            <div className='projects__wrapper'>
   
   
   
    <div className='projects__wrapper_project'>
      

        <img src={eduvos} alt="" />
  
      
      
      
        <div className='links'>
            <div className='svg-div'>
         <div className='eye-fill' >
            <a href='https://github.com/gustavvdwalt17/Edubook_2.0' target='_blank'>
<AiFillGithub  />
</a>
            </div>  

            
    
    </div>
</div>
        <small>Full Stack Application using React and Nodejs among other technologies</small>
      
    </div>
    <div className='projects__wrapper_project'>
      

        <img src={wordle} alt="" />
  
      
      
      
        <div className='links'>
            <div className='svg-div'>
         <div className='eye-fill' >
            <a href='https://github.com/gustavvdwalt17/Wordle_Clone' target='_blank'>
<AiFillGithub  />
</a>
            </div>  

            
    
    </div>
</div>
        <small>Built a Wordle Clone using React.</small>
      
    </div>

    <div className='projects__wrapper_project projects__wrapper-margin'>
      

        <img src={e_commerce} alt="" />
  
      
      
      
        <div className='links'>
            <div className='svg-div'>
         <div className='eye-fill' >
            <a href='https://github.com/gustavvdwalt17/React_e-commerce' target='_blank'>
<AiFillGithub  />
</a>
            </div>  

            
    
    </div>
</div>
        <small>React Native E-Commerce Store with Nodejs.</small>
      
    </div>
            </div>

    </motion.div>
  )
}

export default BackgroundWrap(Projects,'blue','projects')