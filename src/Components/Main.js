import React from 'react'
import Left from './Left'
import Right from './Right'
import '../css/frontend.css'
import RightMain from './RightMain'

function Main() {
  return (
    <>
    <div className="main">
    <Left/>
    <RightMain/>
    </div>
    </>
  )
}

export default Main