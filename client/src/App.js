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

function App() {
  // const [query, setQuery] = useState([])
  // const [weather, setWeather] = useState([])

  // const search = e => {
  //   if (e.key === "Enter") {
  //     fetch(`${}`)
  //   }
  // }
  return (
    <div>
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

export default App;
