import React from 'react'
import './Header.css'
// import '../App.css'
import { Link } from 'react-router-dom'

// import styled from 'styled-components'

// const header = styled.header` 
//     display: flex;
//     justify-content: center;
//     flex-direction: row;
//     align-content: space-between;
//     align-items: center;
//     flex-wrap: nowrap;
//     margin-top: 10vh;


// .header-nav {
//     font-family: 'Pirata One', cursive;
//     text-decoration: none;
//     color: #f5e752;
//     font-size: xx-large;
//     display: flex;
//     justify-content: space-between;
//     padding-inline: 8vw;
//     width: 80vw;
// }

// .header:link, .header:visited {
//     /* color: inherit;
//     text-decoration: inherit; */
//     text-decoration: none;
//     color: #f5e752;
// }`

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





// <div className='literature-link'>
// <Link to="Literature.jsx">LITERATURE</Link>
// </div>