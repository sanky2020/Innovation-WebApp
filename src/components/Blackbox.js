import React from 'react'
import '../styles/Blackbox.css'
import img1 from '../images/section1-img1.png'
import img2 from '../images/section1-img2.png'
import img3 from '../images/section1-img3.png'

function Blackbox() {
  return (
    <div className="blackBoxContainer">
        <div className='blackbox'></div>
        <div className='imageContainer'>
            <img src={img1} alt='demoImage1' className='imgTag img1'/>
            <img src={img2} alt='demoImage1' className='imgTag img2'/>
            <img src={img3} alt='demoImage1' className='imgTag img3'/>
        </div>
    </div>
  )
}

export default Blackbox