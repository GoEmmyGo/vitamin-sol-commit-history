import React from 'react'
import './Header.css'
// import '../App.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        {/* <section className='header-container'> */}
            <div className='header-nav'>
                <div className='about-link'>
                    <Link to="/About">ABOUT</Link>
                </div>
                <div className='calculator-link'>
                    <Link to="/Calculator">CALCULATOR</Link>
                </div>
                <div className='home-link'>
                    <Link to="/Home">HOME</Link>
                </div>
            </div>  
        {/* </section> */}
    </div>
  )
}


// <div className='literature-link'>
// <Link to="Literature.jsx">LITERATURE</Link>
// </div>