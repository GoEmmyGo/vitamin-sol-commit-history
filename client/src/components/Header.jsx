import React from 'react'
import '../App.css'
import About from './About'
import Literature from './Literature'
import Calculator from './Calculator'
import Title from './Title'

export default function Header() {
  return (
    <div>
        <span className='title'><Title /></span>
        <section className='header-container'>
            <section className='header-nav'>
                <div className='about-link'>
                    <About />
                </div>
                <div className='calculator-link'>
                    <Calculator />
                </div>
                <div className='literature-link'>
                    <Literature />
                </div>
            </section>  
        </section>
    </div>
  )
}
