import React  from 'react'
import './App.css'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Calculator from './components/Calculator'
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
        <source src="https://stream.mux.com/9D6LBbSirQyDuBm01pdLKU88Azm00qnOb6/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NTY4MjQxNTIsImF1ZCI6InYiLCJzdWIiOiI5RDZMQmJTaXJReUR1Qm0wMXBkTEtVODhBem0wMHFuT2I2In0.cjzVnXJdBvq5S7kCBNueqiH6hlcqv-DRCi8q65-t45xueKwkm7G4er-TNgzn80lTWTt5xXTAeiFPK2FJUF20ZAzMDuCQqi9hiOnLtU0ASUoxRUVaBCveu451IvrCnvIEkSVewMGjnfPgQvXi62X9QA8CFQF-poioyxYb5VEFxwyKrT8JLx0j3Xa7wuPCeVNLa0c13jF94ZYPFMnG-PpQu9J7nWEpmMHR4kieRp7PQfyJDIHQ4v-Eg9JO8IP74lUSDKzyHYIE3V_cZJml7V29GoTko_RYeWZ2y-B01VQnMxmilhEQAWsaTgYZjL20PAZn3kBqGaEIsN96xJQ7VMsuTQ" type="video/mp4" playbackRate='0.5' />
      </video> */}
      {/* <video id="background-video" autoPlay loop muted >
        <source src="https://github.com/GoEmmyGo/vitamin-sol/blob/main/client/build/Videos/Group%20of%20friends%20rollerskating.mp4" type="video/mp4" 
        playbackrate='0.5' 
        />
      </video> */}
      <Router>
        <div>
          <Header />
            <Routes>
              <Route path='/About' element={<About />} />
              <Route path ='/Calculator' element={ <Calculator />} />
              <Route path='/Home' element={<Home />} />
            </Routes>
        </div>
      </Router>
    </div>
  )
}

// src='https://storage.coverr.co/videos/9D6LBbSirQyDuBm01pdLKU88Azm00qnOb6?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU2NzA1MTQxfQ.7-hityWfjTdf3107NyPoCYzf4IOpv2xaH4M-2IjSEmI'

export default App;
