import React from 'react'
import Header from './Header'
import './About.css'

const About = () => {
  return (
    <div>
      <div className='header'><Header /></div>
      <div className='blurb'>
          <div className='about-title'>ABOUT</div>
          <div className='about-blurb'>
              Hey, you. Yeah, YOU. Don't be bashful, chin up.
              <br/><br/>
              You're having a low energy day, you're feeling down. No particular reason, no real explanation, but its holding you back. You can't focus, you can't get motivated. 
              <br/>
              So let me ask you something, when was the last time you stood outside and let the sun shine on your face? How long has it been since you took a stroll on a sunny afternoon? 
              <br/><br/>
              There's rarely an easy fix for a gloomy headspace, but if you're like most people, you probably have a low level of vitamin D and believe it or not, that can have a very real impact on how you feel and how you function. 
              All it takes to get those levels up is some time in the sun. That's it. Just walk outside and recharge that Vitamin D count. Will it be a miracle cure? No such thing, BUT, it can absolutely lift your spirits, pull you out of that slump a little, hit that reset button real quick.
              <br/><br/>
              We exist solely to calculate for you how long you need in the sun to top off your Vitamin D and hopefully give you that extra little boost that your cold brew coffee couldn't. All you have to do is tell us where you are, what you're wearing (hehehehe) and where you fall on the fitzpatrick scale and we'll tell you how many minutes to go stand outside and soak up those rays. We can even show you how to do the calculation if you want to do it yourself!
              <br></br>
              <p className='final-line'>YOUR soul needs THE sol, my friend, go outside and get it.</p>
          </div>
          <div className='learn-blurb'>Want to check out the science behind this calculation and the researchers who built the data models?</div>
          <a className='learn-link' rel="noreferrer" target="_blank" href='https://fastrt.nilu.no/README_VitD_quartMEDandMED_v2.html'>totally!</a>
      </div>
    </div>
  )
}

export default About
