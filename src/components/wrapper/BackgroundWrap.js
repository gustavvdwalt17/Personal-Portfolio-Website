import React from 'react'
import '../../App.scss'
const BackgroundWrap = (Component,backgroundColor,tag) => function HOC() {
  return (
    <div id={tag} className={`${backgroundColor}`}>




        <Component />
    </div>
  )
}

export default BackgroundWrap