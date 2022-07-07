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
// import Video from './components/Video'
// import { VideoTag } from 'react-video-tag'

function App() {

  return (
    <div className='video'>
        <video id="background-video" autoPlay loop muted >
          <source className='background-video-url' src='https://stream.mux.com/9WJ3YFNea71i1vCWhAt1XwOg6cStPoWC/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NTcxOTcxNDYsImF1ZCI6InYiLCJzdWIiOiI5V0ozWUZOZWE3MWkxdkNXaEF0MVh3T2c2Y1N0UG9XQyJ9.JaQLn9JBAyekTHJAk0x1noUPe-BzAjwyMTjKXGSYGdKlXnlGl4QCbU8xbNRnb6Ow_SUfbq_0a2DtsJgfX4V7GKANPg7lfRfVxIxt1EBj3GU92H8ysXsYcJUOzsn-bOuObhHM-A8dg_37SPr0ITRcTgj5orgVwo76O8hgw2zTa_EDzOhqwSi_f3Qu3jgwxQF17uQkgXxogi1n62dyskbd3x2YLBxvvn6XPC6ECkUcxCOMfcEQ82989w5CYG481giysY9H6QZFfMFz76XK8wPBIoRyAI9xz5Skk6nrdeYf6ojgLhfBlej4BSFCEvHzpN4s94Q3-LZdEKFOXzfRrWZSLw' type="video/mp4" playbackRate='0.5' />
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
      {/* <video id="background-video" autoPlay loop muted >
        <source src="https://stream.mux.com/9WJ3YFNea71i1vCWhAt1XwOg6cStPoWC/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NTcwNTg1MzgsImF1ZCI6InYiLCJzdWIiOiI5V0ozWUZOZWE3MWkxdkNXaEF0MVh3T2c2Y1N0UG9XQyJ9.GKVGvcbdg_WCSrtv654Ess8qXc0N-zrvFIdu56Oqn1ms7_LOAZZO3iDYwD3MA5IT9IgNohzskiDVs_1nfkGCmm4UUvjSdL9-eQZh1cTduxrBuwr3eHmxrB7GvP4N64qlbgj7M7xpxy4mWvtzVHXn1qevUYL5QOhsV2F_ktIH68mpMvQVy-7lB_fYiA_vJy-GvbH5VSJBGrr0QNujyYPQBpou6eCim8DFP2D1QxHLXLoUhA2wq9aPhXKL_eg4B34lNc3j2H3MKtEoLzSt8OdZ_HrIUEBn5ZnFjV8cNaaREHYGFSxt5OTf5wO71U9mHPkaTmg_hFs3vJCTdumbEDjUXQ" 
        playbackrate='0.5' 
        />
      </video> */}
      {/* <Video /> */}
    </div>
  )
}

export default App;
