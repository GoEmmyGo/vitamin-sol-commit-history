import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
        <div className='header'>
            <div className='header-nav'>
                <Link className='about-link' to="/About">ABOUT</Link>
                <Link className='calculator-link' to="/Calculator">CALCULATOR</Link>
                <Link className='return-home-link' to="/ReturnHome">HOME</Link>
            </div>  
        </div>
  )
}

