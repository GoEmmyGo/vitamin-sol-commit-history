import React from 'react'
import './HomeHeader.css'
import { Link } from 'react-router-dom'



export default function HomeHeader() {
  return (
    <div className='home-header'>
        <div className='home-header-nav'>
            <Link className='about-link' to="/About">ABOUT</Link>
            <Link className='calculator-link' to="/Calculator">CALCULATOR</Link>
            <Link className='return-home-link' to="/ReturnHome">HOME</Link>
        </div>  
    </div>
  )
}
