import React from 'react'
import './ReturnHome.css'
import HomeHeader from './HomeHeader'


export default function Home() {
  return (
    <div>
        <div className='home-header'><HomeHeader /></div>
        <div className='return-home'>vitamin sol</div>
    </div>
  )
}