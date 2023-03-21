import React from 'react'
import '../../App.scss'
import { BackgroundWrap } from '../wrapper'
import { motion } from 'framer-motion'
import './Skills.scss'
const Skills = () => {
  return (
    <motion.div
                  whileInView={{x:[100,0], opacity:[0,1]}}
      transition={{duration: 0.5}}

    >
        <h1 className='app__flex'>Skills</h1>


        <div className='skills__div-1'>
          <motion.div className='skills__div_ind'
            whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5,type:'tween'}}
          >

            <h1>Frontend</h1>


            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>CSS</li>
              <li>HTML</li>
              <li></li>
            </ul>
          </motion.div>
          <motion.div className='skills__div_ind'
            whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5,type:'tween'}} >

            <h1>Backend</h1>

            <ul>

              <li>
                Nodejs
              </li>
              <li>Python</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          <motion.div className='skills__div_ind'
            whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5,type:'tween'}}
          >
            <h1>Other</h1>
          
          <ul>
     
            <li>Git</li>
            <li>Sass</li>
            <li>Vs Code</li>
            <li>Bash Shell</li>
          </ul>
          </motion.div>
        </div>
    </motion.div>
  )
}

export default BackgroundWrap(Skills,'darkblue','skills')