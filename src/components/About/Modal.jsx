import React from 'react'
import './Modal.css'
import mycv from './deeds.pdf'
import cv from '../assets/cv.JPG'
function Modal({closeModal}) {
    console.log(closeModal)
  return (
    <div className='modal__background' >

    <div className='modal__background-container' >
    <buttom className='titleCloseBtn' onClick={()=>closeModal(false)} > X </buttom>
    <div className='title' >

        Resume
    </div>
    <div className='body' >
{/* <img src={cv} alt="" />///////////////////// */}
<embed  src={mycv} width="800px" height="800px"/>
    </div>
    <div className='footer' >
    {/* <button >Download</button> */}
    <button onClick={()=>closeModal(false)}>Cancel</button>
    </div>
    </div>
    </div>
  )
}

export default Modal