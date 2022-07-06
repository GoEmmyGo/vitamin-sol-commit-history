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
// import Video from './components/Video'
// import './components/Home.css'
// import { VideoTag } from 'react-video-tag'
// import Solution from './components/Solution'

function App() {
  // const [query, setQuery] = useState([])
  // const [weather, setWeather] = useState([])

  // const search = e => {
  //   if (e.key === "Enter") {
  //     fetch(`${}`)
  //   }
  // }
  // const [timeFrames, setTimeFrames] = useState('')

  // const timeFramesDisplay = () => {
  //   setTimeFrames()
  // }


  return (
    <div>
      {/* <iframe width="100%" height="100%" autoplay loop playsinline title="background" src='../public/Videos/Palm-trees-on-a-sunny-day.mp4' id='video-background'  type="video/mp4"></iframe> */}
      {/* <video playsinline autoplay id="video-background"  preload="none" muted loop>
        <source src="https://stream.mux.com/9D6LBbSirQyDuBm01pdLKU88Azm00qnOb6/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NTY4MTE3ODEsImF1ZCI6InYiLCJzdWIiOiI5RDZMQmJTaXJReUR1Qm0wMXBkTEtVODhBem0wMHFuT2I2In0.hXtGXUhbDmXIWct-9sVM5mdHrVP7oVXurkFKhnoDbjxhWv-r6t1WMMsNtVugwaBJcK5bq0f0ty80rKBHNC1_B5E5PkMxjG9kMifBbCfiM04DBrr4dT6TCz7eElqWHNkGIkW9L76cDQPjlkViLMJGKMaJPwNmuKutshcsb7zSQP4V4vlLNj-ku3nvNJ7C8iVHt5y6YKpncF8qp2bFS-C6ZrUBsMBfnyC6qHa-al6yNX6wqtjwOguuN84gB3c5-RUh4KRzkv9zzEm_p12r2nXW4RA_Dw_aClqtzQLqIsxo8JIdYkA1ig_OFFubeeeGWHZcJ_2mZt1Fo2YFiwZdg1nzVg" type="video/mp4"/>
      </video> */}


      {/* <video id="background-video" autoPlay loop muted >
        <source className='background-video-url' src="https://stream.mux.com/9WJ3YFNea71i1vCWhAt1XwOg6cStPoWC/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NTcwNTg1MzgsImF1ZCI6InYiLCJzdWIiOiI5V0ozWUZOZWE3MWkxdkNXaEF0MVh3T2c2Y1N0UG9XQyJ9.GKVGvcbdg_WCSrtv654Ess8qXc0N-zrvFIdu56Oqn1ms7_LOAZZO3iDYwD3MA5IT9IgNohzskiDVs_1nfkGCmm4UUvjSdL9-eQZh1cTduxrBuwr3eHmxrB7GvP4N64qlbgj7M7xpxy4mWvtzVHXn1qevUYL5QOhsV2F_ktIH68mpMvQVy-7lB_fYiA_vJy-GvbH5VSJBGrr0QNujyYPQBpou6eCim8DFP2D1QxHLXLoUhA2wq9aPhXKL_eg4B34lNc3j2H3MKtEoLzSt8OdZ_HrIUEBn5ZnFjV8cNaaREHYGFSxt5OTf5wO71U9mHPkaTmg_hFs3vJCTdumbEDjUXQ" type="video/mp4" playbackRate='0.5' />
      </video> */}
      {/* <video id="background-video" autoPlay loop muted >
        <source src="https://stream.mux.com/9WJ3YFNea71i1vCWhAt1XwOg6cStPoWC/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NTcwNTg1MzgsImF1ZCI6InYiLCJzdWIiOiI5V0ozWUZOZWE3MWkxdkNXaEF0MVh3T2c2Y1N0UG9XQyJ9.GKVGvcbdg_WCSrtv654Ess8qXc0N-zrvFIdu56Oqn1ms7_LOAZZO3iDYwD3MA5IT9IgNohzskiDVs_1nfkGCmm4UUvjSdL9-eQZh1cTduxrBuwr3eHmxrB7GvP4N64qlbgj7M7xpxy4mWvtzVHXn1qevUYL5QOhsV2F_ktIH68mpMvQVy-7lB_fYiA_vJy-GvbH5VSJBGrr0QNujyYPQBpou6eCim8DFP2D1QxHLXLoUhA2wq9aPhXKL_eg4B34lNc3j2H3MKtEoLzSt8OdZ_HrIUEBn5ZnFjV8cNaaREHYGFSxt5OTf5wO71U9mHPkaTmg_hFs3vJCTdumbEDjUXQ" 
        playbackrate='0.5' 
        />
      </video> */}
      {/* <Video /> */}
      <Router>
        <div>
            <Routes>
              {/* <Route exact path='/'><Redirect to='/home' /></Route> */}
              <Route path='/About' element={<About />} />
              <Route path ='/Calculator' element={ <Calculator />} />
              <Route path='/ReturnHome' element={<ReturnHome />} />
              <Route index element={<Home />} />
            </Routes>
        </div>
      </Router>
    </div>
  )
}


// src='https://storage.coverr.co/videos/9D6LBbSirQyDuBm01pdLKU88Azm00qnOb6?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU2NzA1MTQxfQ.7-hityWfjTdf3107NyPoCYzf4IOpv2xaH4M-2IjSEmI'

export default App;
