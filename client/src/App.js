import React  from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Redirect
} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Calculator from './components/Calculator'
import ReturnHome from './components/ReturnHome'
import Solution from './components/Solution'
import './App.css'
import Video from './images/Group of friends rollerskating.mp4'
// import { VideoTag } from 'react-video-tag'

function App() {

  return (
    <div className='bg-container'>
      <video id="background-video" autoPlay loop muted >
          <source className='background-video-url' src={Video} type="video/mp4" playbackrate='0.5' />
      </video>
      <Router>
        <div>
            <Routes>
              <Route path='/About' element={<About />} />
              <Route path ='/Calculator' element={ <Calculator />} />
              <Route path='/ReturnHome' element={<ReturnHome />} />
              <Route index element={<Home />} />
              <Route path='/Solution' element={<Solution />} />
            </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
